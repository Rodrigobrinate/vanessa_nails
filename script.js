// Validação e simulação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
  this.reset();
});

// Efeito para alterar o cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
