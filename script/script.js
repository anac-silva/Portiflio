const quantidadeEstrelas = 250;
const container = document.getElementById('stars-container');

for (let i = 0; i < quantidadeEstrelas; i++) {
    const estrela = document.createElement('div');
    estrela.classList.add('star');

    estrela.style.top = Math.random() * 100 + 'vh';
    estrela.style.left = Math.random() * 100 + 'vw';

    const tamanho = Math.random() * 2 + 1;
    estrela.style.width = `${tamanho}px`;
    estrela.style.height = `${tamanho}px`;

    estrela.style.opacity = Math.random() * 0.8 + 0.2;

    estrela.style.animationDelay = `${Math.random() * 15}s`;

    container.appendChild(estrela);
}

(function() {
  emailjs.init("7v4OuGLctnnvNkBEv"); // Substitua pelo seu Public Key
})();

document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

emailjs.sendForm("service_qiuiyvb", "template_o07wsbu", this)
    .then(function(response) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("form-contato").reset();
    }, function(error) {
        alert("Erro ao enviar. Tente novamente.");
        console.error(error);
    });
});