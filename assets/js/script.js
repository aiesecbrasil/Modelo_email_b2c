/* Funcionalidade do site */
/**
 * Carregando os links e imagens ao iniciar a pagina
 */
document.addEventListener("DOMContentLoaded", () => {
  // Banner
  document.getElementById("banner-link").href = "https://aiesec.org.br";
  document.getElementById("banner-img").src = "https://res.cloudinary.com/dqallznac/image/upload/v1763242709/BannerPsel_jtskda.png";

  // Botão do formulário
  document.getElementById("form-link").href = `https://forms.gle/seu-formulario?id=${getUrlParameter()}`;

  // Instagram
  document.getElementById("insta-link").href = "https://www.instagram.com/aiesecpelobrasil/reels/?__d=1";
  document.getElementById("whats-link").href = "https://chat.whatsapp.com/Glqs8nyEluMKIY2uQ8k2XJ";
  // Logo do rodapé
  document.getElementById("footer-img").src = "https://res.cloudinary.com/dqallznac/image/upload/v1763242708/LogoAiesec_yvxwg5.png";
  document.getElementById("site-link").href = "https://aiesec.org.br";
});

/**
 * Pegar Paramentro de url para registra usuario que estiver responder o formulario.
 */
function getUrlParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id') || null;
}