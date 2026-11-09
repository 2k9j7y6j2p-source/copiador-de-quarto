# 🐍 COBRA app: Assistente de Construção (Habblet)

Plugin do Tampermonkey para o Habblet. Ele ajuda a construir sem digitar comandos: põe o `:up`, o `:state` e o `:spin` por você, enche áreas com o mesmo mobi e compra o que acabar.

Contato: **Discord vinipetter**

---

## 📥 Como instalar

Funciona só no **navegador do computador** (Chrome, Edge, Opera ou Firefox). Não funciona no aplicativo do Habblet nem no celular.

1. **Instale o Tampermonkey** no navegador:
   - Chrome: https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
   - Outros navegadores: https://www.tampermonkey.net/ (clique em **Download**)

2. **Chrome ou Edge:** libere os scripts.
   1. Abra `chrome://extensions` (no Edge, `edge://extensions`).
   2. No **Tampermonkey**, clique em **Detalhes**.
   3. Ligue **Permitir scripts do usuário** (*Allow User Scripts*).
   4. Se essa opção não aparecer, ligue o **Modo do desenvolvedor**, no canto de cima da página.

3. **Instale o COBRA app.** Abra o link abaixo e clique em **Instalar**:

   👉 **https://www.tampermonkey.net/script_installation.php#url=https://raw.githubusercontent.com/2k9j7y6j2p-source/copiador-de-quarto/main/copiador-de-quarto.user.js**

   No Tampermonkey, ele aparece com o nome **Assistente de Construção**.

4. **Abra o Habblet**, ou aperte **F5** se o jogo já estiver aberto. Se der certo:
   - aparece a mensagem verde **"Bem-Vindo ao SCRIPT do Cobra - DC vinipetter"**;
   - aparece o botão **🧰 Ajudante de construção** no canto de baixo, à direita.

### 🔄 Atualizações

As atualizações chegam sozinhas. Para pegar uma versão nova na hora:
1. Abra o mesmo link de instalação.
2. Clique em **Atualizar**.
3. Aperte **F5** no jogo.

### ❓ Não apareceu nada?

- **Script ligado?** Clique no ícone do Tampermonkey e veja se o **Assistente de Construção** está ligado (verde).
- **Script antigo?** Se no Tampermonkey aparecerem **dois** scripts, o **Copiador de Quarto** e o **Assistente de Construção**, apague o **Copiador de Quarto**. Ele é a versão antiga.
- **Scripts liberados?** Confira se **Permitir scripts do usuário** está ligado (passo 2).
- **F5:** depois de instalar ou atualizar, aperte **F5** no jogo.

---

## 🧰 O que tem em cada versão

### Versão comum (todo mundo)

O **🧰 Ajudante de construção**. Antes de usar, ligue o **Modo construtor** no topo da janela.

- **▦ Preencher área / linha de mobis**
  1. Clique em **📐 selecionar área**.
  2. No jogo, clique em 2 cantos do chão.
  3. Coloque **1 mobi** dentro da área.

  O ajudante põe o **mesmo mobi** em todo o resto da área, em linhas retas, no mesmo `:up` e no mesmo giro. Se faltar mobi no inventário, ele pergunta antes de comprar.
- **⬆ Altura (`:up`):** setas ▲ ▼, passo de 0,01 a 1 ou o número digitado. Vai de −25 a 63.
  - **📐 em cima:** clique num mobi e o próximo vai apoiado em cima dele.
  - **🎯 mesma altura:** clique num mobi e o próximo fica na altura dele. É o mais usado nas sombras.
  - **📍 só clicar:** o mobi vai na altura do quadrado onde você clicou. Sombra em cima de sombra fica 0,1 acima.
- **🔆 Estado do mobi (`:state`):** setas ou número.
- **🔄 Girar o mobi (`:spin`):** 0 = posição normal, 2, 4 e 6 = último giro.
- **🛒 Compra automática:** quando o mobi que você está colocando acaba, o próximo clique no jogo compra mais. Você escolhe a quantidade; 0 = não comprar.
- **⚡ Atalho:** mostrar ou esconder os wired (`:hidewired`).

### Versão básica (liberada pela Cobra)

Tudo da versão comum e mais:

- **⚡ Wired:** ler os wired de um quarto, copiar e colar wired, guia dos wired e sistemas prontos para montar.
- **🎓 Aprender:** acompanha os wired de quem está montando no quarto e guarda o que aprendeu.
- **Nome em verde** na lista de amigos, para quem usa o app.

### ⭐ Versão VIP (completa)

Tudo das outras versões e mais:

- **🏠 Copiador de quarto:** guarda um quarto como cópia, com os mobis, as alturas, os giros e o floor, e cola no seu quarto. Ele compra o que falta e coloca cada mobi no lugar.
- **🧱 Construções:** grava uma construção sua e coloca de novo onde quiser.
- **🟫 Piso, 🗺 Floor e 🖼 Parede:** floor do quarto, lajotas andáveis, pisos e papéis de parede.
- **🛒 Catálogo e 🧾 Compras:** os mobis do catálogo com preço e a lista de compras da cópia.
- **🛡 Anticópia.**
- **Nome em verde destacado** na lista de amigos.

**Quer a versão VIP? Contate no Discord: vinipetter**
