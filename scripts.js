const noClick = document.querySelector('.blog-logo');
noClick.addEventListener('click', function (ev) {
    ev.preventDefault()
});

const noClick2 = document.querySelector('.blog-title');
noClick2.addEventListener('click', function (ev) {
    ev.preventDefault()
});

const cambiaImagen = document.querySelector('.kg-image')
cambiaImagen.setAttribute('src','assets/magic-1.gif');

const cambiaColor = document.querySelector('.post-content')
cambiaColor.setAttribute('style','background-color: pink');

const ratonEncima = document.querySelector('.post-title');
ratonEncima.addEventListener('mouseover', funcOver );
ratonEncima.addEventListener('mouseout', funcOut );
function funcOver () {
    ratonEncima.setAttribute('style', 'background-color:blue')
};
function funcOut () {
    ratonEncima.setAttribute('style', 'background-color:white')
}


