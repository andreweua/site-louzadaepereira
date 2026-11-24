# Grupo Louzada & Pereira — Portal v2.0

Nova estrutura estática do portal institucional, preparada para GitHub Pages.

## História institucional adotada
- 18/11/1983: início da história empresarial com Izabel Louzada e Helio Pereira.
- 2023: nova fase de união/estruturação das divisões de tecnologia e audiovisual.

## Stack
- HTML5 semântico
- CSS responsivo
- JavaScript vanilla
- Tailwind CSS 3 (pipeline opcional de compilação)
- GitHub Pages + GitHub Actions

## Estrutura
- `/` — homepage institucional
- `/grupo/nossa-historia/` — trajetória
- `/empresas/*/` — páginas das cinco empresas/divisões
- `/privacidade/` — minuta de política de privacidade
- `/assets/css/styles.css` — identidade e layout
- `/assets/js/` — navegação, formulário e configuração

## Antes de publicar
1. Revisar os nomes oficiais e a relação societária/organizacional das cinco empresas.
2. Completar os textos comerciais, portfólios, fotos e canais oficiais.
3. Atualizar `assets/js/config.js` com o webhook público e controlado do n8n. Não inserir tokens ou senhas no front-end.
4. Configurar CORS, validação, rate limit, anti-spam e persistência no fluxo n8n.
5. Revisar a minuta de privacidade com o responsável pelo tratamento de dados.
6. Confirmar que o domínio `louzadaepereira.com.br` e o DNS apontam para o GitHub Pages.
7. Testar todos os formulários, links, navegação mobile e redirecionamentos.

## Build opcional do Tailwind
```bash
npm install
npm run build:css
```
O CSS principal está em `assets/css/styles.css`. O pipeline Tailwind está preparado para utilitários adicionais; não é necessário para a página funcionar.

## Publicação no GitHub Pages
O workflow `.github/workflows/pages.yml` publica o conteúdo da raiz na branch `main`.
No GitHub, em **Settings > Pages**, selecione **GitHub Actions** como source.
Mantenha o `CNAME` somente se o domínio personalizado continuar apontando para este repositório.

## Importante sobre o formulário
O formulário não finge sucesso. Enquanto `webhookUrl` estiver vazio, informa claramente que não houve envio. A mensagem de sucesso só aparece após resposta HTTP de sucesso do endpoint.

## Limites desta entrega
Este pacote é uma base funcional de front-end. Não inclui CRM, armazenamento de leads, webhook n8n ativo, número oficial de WhatsApp, imagens comerciais licenciadas ou dados de contato não fornecidos. Essas integrações dependem de configuração e validação.
