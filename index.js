// Clique do botão com o id 'cta-button'
document.getElementById('cta-button').addEventListener('click', function() {
    alert('“Botão clicado”'); // Alerta quando o botão é clicado
});

// Envio ao formulário
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenção ao envio padrão do formulário
    alert('Formulário enviado com sucesso!'); // Alerta quando o formulário é enviado
});
