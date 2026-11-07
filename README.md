# Copiador de Quarto

Script do Tampermonkey para o Habblet (cliente Nitro). Ele copia os mobis de um quarto (nome, posição, altura e giro) e cola no seu quarto: compra o que faltar e coloca cada mobi no lugar.

Também tem:
- aba **Wired**: guia dos wired, sistemas prontos para montar e leitura dos wired de um quarto (copiar e colar programados);
- aba **Piso**: lajotas andáveis para criar áreas caminháveis;
- aba **Catálogo**: os mobis do catálogo com preço;
- aba **Construções**: grava uma construção sua e coloca de novo onde quiser.

## Como instalar

1. Instale a extensão **Tampermonkey** no navegador (Chrome, Edge ou Firefox).
2. Abra o link de instalação abaixo. O Tampermonkey mostra a tela do script: clique em **Instalar**.

   **[Instalar o Copiador de Quarto](https://raw.githubusercontent.com/2k9j7y6j2p-source/copiador-de-quarto/main/copiador-de-quarto.user.js)**

3. Abra (ou recarregue) o Habblet. O botão do copiador aparece no canto da tela.

As atualizações chegam sozinhas pelo Tampermonkey.

### Não apareceu no jogo?

- **Chrome/Edge:** abra `chrome://extensions` (no Edge, `edge://extensions`), clique em **Detalhes** no Tampermonkey e ligue **Permitir scripts do usuário** (Allow User Scripts). Nas versões mais antigas do Chrome, ligue o **Modo do desenvolvedor**, no canto de cima.
- Clique no ícone do Tampermonkey e veja se o **Copiador de Quarto** está ligado (verde).
- Recarregue a página do hotel (F5) depois de instalar.
- Só funciona no navegador do computador, não no aplicativo do Habblet nem no celular.

## Pedir sistemas de wired ao Claude pela API (opcional)

Na aba **Wired → Pedir e montar**, o botão **🤖 pedir ao Claude pela API** manda o seu pedido para o Claude e o sistema que voltar fica pronto para montar. Para isso:

1. Crie uma chave em [console.anthropic.com](https://console.anthropic.com) (o uso da API é cobrado à parte da assinatura do Claude; vale pôr um limite de gasto no console).
2. Instale o ajudante: **[Instalar o Copiador de Quarto – Claude](https://raw.githubusercontent.com/2k9j7y6j2p-source/copiador-de-quarto/main/copiador-claude.user.js)**.
3. Recarregue o hotel. No primeiro pedido o ajudante pergunta a chave (ou use o menu do Tampermonkey → **🔑 Colocar ou trocar a chave do Claude**).

A chave fica só no Tampermonkey do seu navegador: o ajudante roda separado da página do hotel, então o site não consegue ler a chave. Cada pedido pede confirmação numa janela do navegador. Nunca cole a chave em conversas, mensagens ou no próprio script.

## Como usar o básico

1. No quarto que você quer copiar: **Colar no meu quarto → Guardar este quarto como cópia**.
2. Ainda nele: **2. Comprar o que falta** (compra tudo o que a cópia precisa).
3. No seu quarto: **Colar tudo**.

Quartos com o selo de autoral (© ou #autoral no nome ou na descrição) não são copiados.
