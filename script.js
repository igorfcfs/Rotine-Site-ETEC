var home = document.getElementById('home');

home.addEventListener('click', function () {
    // Define a nova URL para onde você deseja navegar
    var novaPagina = './home.html';

    // Navega para a nova página
    window.location.href = novaPagina;
});

var explorar = document.getElementById('explorar');

explorar.addEventListener('click', function () {
    // Define a nova URL para onde você deseja navegar
    var novaPagina = './explorar.html';

    // Navega para a nova página
    window.location.href = novaPagina;
});