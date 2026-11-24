(() => {
  const form = document.querySelector("#lead-form");
  if (!form) return;
  const status = document.querySelector("#form-status");
  const phone = form.querySelector('[name="telefone"]');
  phone?.addEventListener("input", () => {
    const digits = phone.value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 10) {
      phone.value = digits.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_,a,b,c) =>
        [a && `(${a}`, b && `) ${b}`, c && `-${c}`].filter(Boolean).join(""));
    } else {
      phone.value = digits.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    }
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    status.className = "form-status";
    if (!form.reportValidity()) return;
    if (form.elements.website.value) return;
    const webhook = window.LP_CONFIG?.webhookUrl?.trim();
    if (!webhook) {
      status.textContent = "O formulário ainda não foi conectado ao atendimento. Nenhuma mensagem foi enviada. Utilize os canais oficiais da empresa.";
      status.classList.add("error");
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    delete data.website;
    data.consentimento = form.elements.consentimento.checked;
    data.origem = new URLSearchParams(location.search).get("utm_source") || "acesso-direto";
    data.pagina = location.pathname;
    data.enviado_em = new Date().toISOString();
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "Enviando...";
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Falha no recebimento");
      status.textContent = "Mensagem recebida. Nossa equipe dará continuidade ao atendimento.";
      status.classList.add("success");
      form.reset();
    } catch (error) {
      status.textContent = "Não foi possível confirmar o envio. Tente novamente mais tarde ou utilize um canal oficial de atendimento.";
      status.classList.add("error");
    } finally {
      button.disabled = false;
      button.innerHTML = 'Enviar mensagem <span>↗</span>';
    }
  });
})();
