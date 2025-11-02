// Mensagem de boas-vindas ao carregar o site
window.addEventListener("DOMContentLoaded", () => {
  console.log("Bem-vindo(a) à Sucos Natural 🍹");
  const hora = new Date().getHours();

  let saudacao;
  if (hora < 12) saudacao = "Bom dia!";
  else if (hora < 18) saudacao = "Boa tarde!";
  else saudacao = "Boa noite!";

  // Mostra uma mensagem personalizada no banner
  const bannerTitulo = document.querySelector(".banner h2");
  if (bannerTitulo) {
    bannerTitulo.textContent = `${saudacao} 100% Natural, Puro e Refrescante!`;
  }
});

// Animação suave ao clicar nos links do menu
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});

// Interatividade do botão de promoção
const botaoPromo = document.querySelector(".banner button");
if (botaoPromo) {
  botaoPromo.addEventListener("click", () => {
    const mensagens = [
      "🍹 Promoção do dia: leve saúde e sabor para sua vida!",
      "🌿 Sucos 100% naturais com 10% de desconto hoje!",
      "🍊 Experimente nossos sabores frescos e ganhe um brinde especial!",
    ];
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    alert(mensagemAleatoria);
  });
}

// Validação simples e envio do formulário com Formspree
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", async e => {
    e.preventDefault();

    const nome = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const mensagem = form.querySelector("textarea").value.trim();

    if (!nome || !email || !mensagem) {
      alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Envia os dados para o Formspree
    try {
      const resposta = await fetch("https://formspree.io/f/mqagdwbr", { // substitua pelo seu link do Formspree
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (resposta.ok) {
        alert(`✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        form.reset();
      } else {
        alert("❌ Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (erro) {
      console.error(erro);
      alert("⚠️ Falha na conexão. Verifique sua internet e tente novamente.");
    }
  });
}

