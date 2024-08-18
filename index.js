// botão.
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Botão clicado');
});

// formulário id.
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert('Formulário enviado com sucesso!');
});
