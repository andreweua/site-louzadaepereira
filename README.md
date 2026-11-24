# **Website Institucional • Louzada & Pereira & Louzada's Films**

* **Domínio:** [louzadaepereira.com.br](https://louzadaepereira.com.br)
* **Hospedagem:** GitHub Pages
* **Desenvolvimento:** [PereiraLabs - Divisão de Tecnologia e IA](https://github.com/andreweua) | **Louzada & Pereira - Soluções Digitais**

Este repositório contém a infraestrutura técnica e a arquitetura de conteúdo do site principal da **Louzada & Pereira - Soluções Digitais**, destacando a produtora audiovisual **Louzada's Films** e a divisão de tecnologia **PereiraLabs**.

---

## **Identidade Visual & Diretrizes de Design**

* **Estilo Visual:** Cinematográfico, escuro, atmosfera *premium*, com transições fluidas e foco em mídias de alta conversão.
* **Paleta de Cores:**
  * **Fundo Principal:** `#0B0C10` (Preto Profundo)
  * **Cor Primária / Destaque:** `#D11919` (Vermelho Louzada - Representando Força, Impacto e Ação)
  * **Elementos Secundários & Texto:** `#FFFFFF` (Branco Puro) e `#C5C6C7` (Cinza Claro Metallized)
* **Stack Técnica:** HTML5 Semântico, Tailwind CSS (CDN), Google Fonts (*Inter*) e Vanilla JavaScript (máscara de telefone e integração Webhook n8n).

---

## **Estrutura de Seções & Conteúdo da Navegação**

1. **Hero Banner (O Impacto Visual):** Proposta de valor *"Cinema que conecta. Soluções que vendem."* com CTAs para o portfólio audiovisual e para a **PereiraLabs**.
2. **Quem Somos (A Aliança):** Fundação em 2023 pela união de dois irmãos e sócios, integrando cinema (**Louzada's Films**) e engenharia de sistemas (**PereiraLabs**).
3. **Louzada's Films (A Produtora):**
   * **Especialidades:** Vídeos Comerciais e Institucionais, Posicionamento de Especialistas/Influenciadores e Cinematografia Aérea certificada (SARPAS/DECEA/RETA).
   * **Projetos em Destaque:** Case automotivo **Toyota Corolla Cross 2023** e produção estratégica para influenciadores digitais.
4. **Louzada & Pereira (Soluções Digitais):** Gestão de Tráfego Pago (Meta Ads e Google Ads), Estratégias Digitais para Lançamentos e Gestão Completa de Marca.
5. **PereiraLabs (A Base Tecnológica):** Transição institucional para a divisão de tecnologia, IA e automações (`pereiralabs.com.br`).
6. **Contato & Captação de Leads:** Formulário preparado para envio via Webhook **n8n** com disparo automático de atendimento via WhatsApp.

---

## **Arquivos do Projeto**

* [`index.html`](./index.html): Landing Page institucional completa e responsiva.
* [`CHANGELOG.md`](./CHANGELOG.md): Histórico de versões no padrão *Keep a Changelog*.
* [`README.md`](./README.md): Documentação técnica e institucional do repositório.

---

## **Passo a Passo para Publicação (GitHub Pages & Domínio Próprio)**

```bash
git init
git branch -M main
git add .
git commit -m "feat: lancamento inicial do site institucional Louzada & Pereira"
git remote add origin https://github.com/andreweua/site-louzadaepereira.git
git push -u origin main
```

1. No GitHub (`https://github.com/andreweua/site-louzadaepereira`), acesse **Settings** > **Pages**.
2. Em **Build and deployment**, selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
3. Em **Custom domain**, informe `louzadaepereira.com.br`, salve e habilite **Enforce HTTPS**.

---

Desenvolvido por: **PereiraLabs - Divisão de Tecnologia e IA** | **Louzada & Pereira - Soluções Digitais**. `v1.0.0`
