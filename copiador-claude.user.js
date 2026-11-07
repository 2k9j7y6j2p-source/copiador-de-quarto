// ==UserScript==
// @name         Copiador de Quarto – Claude (chave da API)
// @namespace    copiador-de-quarto
// @version      1.0.0
// @description  Ajudante do Copiador de Quarto: guarda a sua chave da API da Anthropic no Tampermonkey e manda os pedidos de wired para o Claude.
// @match        *://*.habblet.city/*
// @match        *://habblet.city/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @connect      api.anthropic.com
// @sandbox      DOM
// @inject-into  content
// @updateURL    https://raw.githubusercontent.com/2k9j7y6j2p-source/copiador-de-quarto/main/copiador-claude.user.js
// @downloadURL  https://raw.githubusercontent.com/2k9j7y6j2p-source/copiador-de-quarto/main/copiador-claude.user.js
// ==/UserScript==

// Por que um script separado: o Copiador roda dentro da página do hotel, onde o código do site consegue ler o que
// fica guardado. Este ajudante roda isolado (sandbox DOM do Tampermonkey): a chave fica no armazenamento do
// Tampermonkey e a chamada sai pela extensão, então a página nunca vê a chave.
//
// Conversa com o Copiador por eventos na página (só texto):
//   página → ajudante: "copiador-claude:ola" e "copiador-claude:pedido" {id, sistema, texto}
//   ajudante → página: "copiador-claude:pronto" {temChave} e "copiador-claude:resposta" {id, ok, texto | erro}
// Cada pedido pede confirmação numa janela do navegador, que o site não consegue clicar sozinho.

(function () {
  'use strict';
  const KEY = 'chaveAnthropic';
  const MODEL = 'claude-opus-5-5';

  const temChave = () => !!GM_getValue(KEY, '');
  const avisar = (nome, dados) => document.dispatchEvent(new CustomEvent(nome, { detail: JSON.stringify(dados) }));
  const pronto = () => avisar('copiador-claude:pronto', { temChave: temChave(), modelo: MODEL });

  function pedirChave() {
    const v = window.prompt('Cole a sua chave da API da Anthropic (começa com sk-ant-).\nEla fica guardada só no Tampermonkey deste navegador.', '');
    if (v == null) return false;
    const chave = v.trim();
    if (!/^sk-ant-[\w-]{20,}$/.test(chave)) { window.alert('Isso não parece uma chave da Anthropic (sk-ant-…). Nada foi guardado.'); return false; }
    GM_setValue(KEY, chave);
    pronto();
    return true;
  }

  GM_registerMenuCommand('🔑 Colocar ou trocar a chave do Claude', pedirChave);
  GM_registerMenuCommand('🗑 Apagar a chave do Claude', () => {
    if (window.confirm('Apagar a chave do Claude deste navegador?')) { GM_deleteValue(KEY); pronto(); }
  });

  function chamar(sistema, texto) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'POST',
        url: 'https://api.anthropic.com/v1/messages',
        headers: {
          'content-type': 'application/json',
          'x-api-key': GM_getValue(KEY, ''),
          'anthropic-version': '2026-10-21',
          'anthropic-beta': 'server-side-fallback-2026-07-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        data: JSON.stringify({
          model: MODEL,
          max_tokens: 16000,
          output_config: { effort: 'high' },
          fallbacks: 'default', // se o Claude recusar por engano, o próprio servidor tenta outro modelo
          system: sistema,
          messages: [{ role: 'user', content: texto }],
        }),
        timeout: 300000,
        onload: (r) => {
          let j = null;
          try { j = JSON.parse(r.responseText); } catch (_) { /* resposta sem JSON */ }
          if (r.status === 401) { reject(new Error('a chave não foi aceita (confira ou troque no menu do Tampermonkey)')); return; }
          if (r.status === 429) { reject(new Error('limite de uso da API: espere um pouco e tente de novo')); return; }
          if (r.status !== 200 || !j) { reject(new Error((j && j.error && j.error.message) || `a API respondeu ${r.status}`)); return; }
          if (j.stop_reason === 'refusal') { reject(new Error('o Claude não quis montar esse pedido')); return; }
          if (j.stop_reason === 'max_tokens') { reject(new Error('a resposta ficou grande demais e foi cortada: peça um sistema menor')); return; }
          const txt = (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
          if (!txt.trim()) { reject(new Error('o Claude respondeu vazio')); return; }
          resolve(txt);
        },
        onerror: () => reject(new Error('sem conexão com a API')),
        ontimeout: () => reject(new Error('a API demorou mais de 5 minutos')),
      });
    });
  }

  document.addEventListener('copiador-claude:ola', pronto);
  document.addEventListener('copiador-claude:pedido', (e) => {
    let p;
    try { p = JSON.parse(e.detail); } catch (_) { return; }
    if (!p || typeof p.texto !== 'string' || typeof p.sistema !== 'string') return;
    const id = p.id;
    const fim = (dados) => avisar('copiador-claude:resposta', { id, ...dados });
    if (!temChave() && !pedirChave()) { fim({ ok: false, erro: 'sem chave do Claude' }); return; }
    const resumo = String(p.pedido || '').slice(0, 160);
    if (!window.confirm(`Mandar este pedido ao Claude? Ele usa a sua chave da API (cobrado por uso).\n\n“${resumo}”`)) { fim({ ok: false, erro: 'cancelado' }); return; }
    chamar(p.sistema, p.texto).then((texto) => fim({ ok: true, texto }), (err) => fim({ ok: false, erro: err.message }));
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pronto); else pronto();
})();
