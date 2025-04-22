// 1. Récupérer l'id de l'élément concerné
// 2. addEventListener attend qu'une action ce produise, soit lorsqu'on 'click' sur la balise html souhaité
// 3. Redirection vers la page concerné

document.getElementById('Accueil').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('Jakarta').addEventListener('click', function() {
    window.location.href = 'PageJakarta.html';
});

document.getElementById('Bali').addEventListener('click', function() {
    window.location.href = 'PageBali.html';
});

document.getElementById('Jogja').addEventListener('click', function() {
    window.location.href = 'PageJogja.html';
});

document.getElementById('HistoirePays').addEventListener('click', function() {
    window.location.href = 'PageHistoirePays.html';
});

document.getElementById('APropos').addEventListener('click', function() {
    window.location.href = 'PageAPropos.html';
});

document.getElementById('article-Jakarta').addEventListener('click', function() {
    window.location.href = 'PageJakarta.html';
});

document.getElementById('article-Bali').addEventListener('click', function() {
    window.location.href = 'PageBali.html';
});

document.getElementById('article-Jogja').addEventListener('click', function() {
    window.location.href = 'PageJogja.html';
});