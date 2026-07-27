# Portfólio — Vinícius Martin (Next.js)

Reconstrução completa do portfólio em **Next.js 14 (App Router) + React +
Tailwind CSS + Recharts**, mantendo o mesmo domínio já publicado na Vercel.

## O que mudou em relação à versão anterior (HTML/CSS/JS puro)

- Todo o site agora é um app React/Next.js — componentizado, com dados
  centralizados em `data/projects.js`.
- Paleta trocada para grafite + acento azul (`#3E7BFA`), tipografia
  Space Grotesk (títulos) + Inter (texto) + JetBrains Mono (dados/labels).
- Hero reformulada como um **painel de status** (estilo dashboard), com
  stats e um gráfico de sinal decorativo.
- Cada projeto ganhou: badges de linguagem/tecnologia, uma **barra de
  composição de stack** no card, e na página de detalhe um **gráfico de
  pizza** com a composição técnica e um **frame estilo janela de sistema**
  ao redor do protótipo (vídeo/imagem).
- Seção "Sobre" ganhou um gráfico de proficiência técnica.
- Formulário de contato mantém exatamente a mesma lógica de envio para
  WhatsApp que você já tinha.

## Passo a passo para manter o mesmo link (Vercel + GitHub)

1. **Copie suas imagens.** Este projeto não trouxe os arquivos binários da
   pasta `img/` (favicon, fotos dos projetos etc.) — apenas o código.
   Copie a pasta `img/` do seu repositório atual para dentro de
   `public/img/` deste projeto (mesmos nomes de arquivo, então nada mais
   precisa ser alterado no código).
2. **Suba estes arquivos para o mesmo repositório do GitHub** que já está
   conectado ao seu projeto na Vercel — pode substituir todo o conteúdo
   antigo (index.html, bshop.html etc. não são mais necessários).
3. **Não precisa mudar nada nas configurações da Vercel.** Como o projeto
   já está linkado ao repositório, o próximo `git push` já é
   detectado automaticamente. A Vercel identifica que agora é um projeto
   Next.js (pelo `package.json`) e ajusta o build sozinha
   (`next build` como comando de build, sem necessidade de configurar
   nada manualmente). O domínio que você já usa continua exatamente
   o mesmo.
4. Rode localmente antes de subir, se quiser conferir:
   ```bash
   npm install
   npm run dev
   ```
   Depois abra `http://localhost:3000`.

## Estrutura

```
app/
  layout.jsx          → fontes e metadata globais
  page.jsx            → monta a home (Nav, Hero, About, Projetos, Contato)
  projetos/[slug]/    → página de detalhe de cada projeto (gerada a partir de data/projects.js)
components/           → todos os blocos de UI (Hero, cards, gráficos, etc.)
data/projects.js      → fonte única de verdade: projetos, stack, skills e stats
public/img/           → onde suas imagens precisam ser coladas
```

## Pendências do projeto MediCore

Adicionei o MediCore em `data/projects.js` com dois pontos deixados em
aberto de propósito — o site funciona normalmente mesmo sem eles (mostra
um placeholder no lugar), só finalize quando tiver o material:

1. **Logo:** coloque o arquivo em `public/img/medicore-logo.png` (ou ajuste
   o campo `logo` no objeto do MediCore para o nome que preferir). Até lá,
   aparece uma caixinha tracejada escrito "logo" no lugar.
2. **Vídeo do protótipo:** troque `media: { type: "video", src: "" }` por
   `media: { type: "video", src: "https://www.youtube.com/embed/SEU_ID" }`
   (mesmo formato de embed que os outros projetos já usam). Até lá,
   aparece um aviso no frame do protótipo pedindo o link.

## Editar/adicionar um projeto novo

Tudo fica em `data/projects.js`. Basta adicionar um novo objeto ao array
`projects` (nome, descrição, stack, `stackMix` para o gráfico, mídia do
protótipo). A página `/projetos/[slug]` e o card na home são gerados
automaticamente a partir disso — não precisa criar HTML novo.
