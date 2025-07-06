let trilho = document.querySelector('.trilho');
let indicador = document.querySelector('.indicador');
let body = document.querySelector('body');
let textos = document.querySelectorAll('p');
let cards = document.querySelectorAll('.cards-projeto');
let subtitulos = document.querySelectorAll('h2, h3, h4, h5');
let links = document.querySelectorAll('a');
let formulario = document.querySelector('#form-contato');
let textoForm = document.querySelectorAll('label');
let nome = document.querySelector('h1');

trilho.addEventListener('click', function () {
    trilho.classList.toggle('light');

    if (trilho.classList.contains('light')) {
        body.style.backgroundImage = 'linear-gradient(to left bottom, #80e9ff, #87e1ff, #9bd8ff, #b4cdff, #cdc1ff, #fcacdb, #f89289, #ff9e59, #ffb327)';

        textos.forEach(el => el.style.color = '#040318');
        subtitulos.forEach(el => {el.style.color = '#5441c0';
            el.style.textShadow = 'none'; });
        links.forEach(el => el.style.color = '#2e17a1');
        cards.forEach(el => el.style.backgroundColor = '#cdc1ff');
        formulario.style.backgroundColor = '#cdc1ff';
        textoForm.forEach(el => el.style.color = '#040318');
        
        nome.style.textTransform = 'uppercase';
        nome.style.backgroundImage = 'linear-gradient(to right,rgb(54, 29, 194),rgb(149, 41, 221),rgb(212, 0, 177))';
        nome.style.backgroundSize = '300% 100%';
        nome.style.animation = 'degrade 10s linear infinite alternate';
        nome.style.webkitBackgroundClip = 'text';
        nome.style.webkitTextFillColor = 'transparent';


    } else {
        body.style.backgroundImage = 'linear-gradient(to left bottom, #10063f, #12025d, #251086, #2e17a1, #4521a8, #512ca5, #6826c4, #811dc3, #8911b8, #a706a7, #a00185)';

        textos.forEach(el => el.style.color = 'var(--cor-letra-texto-dark)');
        subtitulos.forEach(el => el.style.color = 'var(--cor-letra-secundaria-dark)');
        links.forEach(el => el.style.color = 'var(--cor-letra-texto-dark)');
        cards.forEach(el => el.style.backgroundColor = 'var(--cor-fundo-box-dark)');
        formulario.style.backgroundColor = 'var(--cor-fundo-box-dark)';
        textoForm.forEach(el => el.style.color = 'var(--cor-letra-texto-dark)');

        nome.style.textTransform = 'uppercase';
        nome.style.backgroundImage = 'linear-gradient(to right, #b0a0fb, #74b6ff, #05c8ff, #00d6fb, #00e0df)';
        nome.style.backgroundSize = '300% 100%';
        nome.style.animation = 'degrade 10s linear infinite alternate';
        nome.style.webkitBackgroundClip = 'text';
        nome.style.webkitTextFillColor = 'transparent';

    }
});
