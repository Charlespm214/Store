const botonBuscar = document.querySelector('.bsq');
const cajaBusqueda = document.querySelector('.txtBuscar');
const ocultar = document.querySelector('body'); 
botonBuscar.addEventListener('click', ()=>
    {
        cajaBusqueda.classList.add('show')
    })
ocultar.addEventListener('click', ()=>
    {
        cajaBusqueda.classList.remove('show')      
    })