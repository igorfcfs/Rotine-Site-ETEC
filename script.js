// NAVEGA PARA ABA HOME
var home = document.getElementById('home');

home.addEventListener('click', function () {
    // Define a nova URL para onde você deseja navegar
    var novaPagina = './home.html';

    // Navega para a nova página
    window.location.href = novaPagina;
});

// NAVEGA PARA ABA ROTINAS
var rotinas = document.getElementById('rotinas');

rotinas.addEventListener('click', function () {
    // Define a nova URL para onde você deseja navegar
    var novaPagina = './rotinas.html';

    // Navega para a nova página
    window.location.href = novaPagina;
});

// NAVEGA PARA ABA EXPLORAR
var explorar = document.getElementById('explorar');

explorar.addEventListener('click', function () {
    // Define a nova URL para onde você deseja navegar
    var novaPagina = './explorar.html';

    // Navega para a nova página
    window.location.href = novaPagina;
});

// NAVEGA PARA ABA EXPLORAR (A PARTIR DOS ELEMENTOS CLICADOS)
var voltar_para_explorar = document.getElementById('voltar_para_explorar');

voltar_para_explorar.addEventListener('click', function () {
    // Define a nova URL para onde você deseja navegar
    var novaPagina = './explorar.html';

    // Navega para a nova página
    window.location.href = novaPagina;
});