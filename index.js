document.getElementById('cta-button').addEventListener('click', function() {
    alert('“Botão clicado”');
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
