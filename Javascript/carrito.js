document.addEventListener('DOMContentLoaded', () => {

    const baseDeDatos = [ 
      {
          id: 1,
          nombre: 'Velocímetro original Discover 125 St',
          precio: 240700,
          imagen: 'Img/producto1.webp'
      },
      {
          id: 2,
          nombre: 'Visor original Discover 125ST/R',
          precio: 39800,
          imagen: 'Img/producto3.webp'
      },
      {
          id: 3,
          nombre: 'Cable Tacómetro Discover 125St/150St',
          precio: 17400,
          imagen: 'Img/producto4.webp'
      },
      {
          id: 4,
          nombre: 'Visor nivel de aceite Discover',
          precio: 6400,
          imagen: 'Img/producto5.webp'
      },
      {
        id: 5,
        nombre: 'Espejo izquierdo Discover 125 St',
        precio: 29500,
        imagen: 'Img/producto6.webp'
    },
    {
        id: 6,
        nombre: 'Direccional RR/LH Discover 125 ST',
        precio: 39700,
        imagen: 'Img/producto7.webp'
    },
    {
        id: 7,
        nombre: 'Espejo Derecho Discover 125 St',
        precio: 34700,
        imagen: 'Img/producto8.webp'
    },
    {
        id: 8,
        nombre: 'Discos clutch x5 Discover 125 ST',
        precio: 40700,
        imagen: 'Img/producto9.webp'
    },
    {
        id: 9,
        nombre: 'Filtro de aire Discover 125 ST',
        precio: 33900,
        imagen: 'Img/producto10.webp'
    },
    {
        id: 10,
        nombre: 'Flasher BLACK Pulsar/Discover',
        precio: 19000,
        imagen: 'Img/producto12.webp'
    },
    {
        id: 11,
        nombre: 'Disco de freno Discover 125 ST',
        precio: 244000,
        imagen: 'Img/producto13.webp'
    },
    {
        id: 12,
        nombre: 'Kit Sprocket Discover 125St 14/43',
        precio: 78200,
        imagen: 'Img/producto14.webp'
    }
];

let carrito = [];
const moneda = ' COP';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#vaciar');
const miLocalStorage = window.localStorage;
            function renderizarProductos() {
                baseDeDatos.forEach((info) => {
                    // Estructura
                    const miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'tarjeta');
                    // Body
                    const miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('T-interna');
                    // Titulo
                    const miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('descripcion');
                    miNodoTitle.textContent = info.nombre;
                    // Imagen
                    const miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('img-fluid');
                    miNodoImagen.setAttribute('src', info.imagen);
                    // Precio
                    const miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('PrecioProd');
                    miNodoPrecio.textContent = `${info.precio}${moneda}`;
                    // Boton
                    const miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primary');
                    miNodoBoton.textContent = '+';
                    miNodoBoton.setAttribute('marcador', info.id);
                    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    DOMitems.appendChild(miNodo);
                });
            }

            function anyadirProductoAlCarrito(evento) {
                carrito.push(evento.target.getAttribute('marcador'))
                renderizarCarrito();
                guardarCarritoEnLocalStorage();
            }

            function renderizarCarrito() {
                DOMcarrito.textContent = '';
                const carritoSinDuplicados = [...new Set(carrito)];
                carritoSinDuplicados.forEach((item) => {
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });
                    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                        return itemId === item ? total += 1 : total;
                    }, 0);
                    const miNodo = document.createElement('li');
                    miNodo.classList.add('lista-item', 'pPrecioTtal', 'mx-2');
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;
                    const miBoton = document.createElement('button');
                    miBoton.classList.add('btn', 'btn-vaciar', 'mx-5');
                    miBoton.textContent = 'X';
                    miBoton.style.marginLeft = '1rem';
                    miBoton.dataset.item = item;
                    miBoton.addEventListener('click', borrarItemCarrito);
                    miNodo.appendChild(miBoton);
                    DOMcarrito.appendChild(miNodo);
                });
                DOMtotal.textContent = calcularTotal();
            }

            function borrarItemCarrito(evento) {
                const id = evento.target.dataset.item;
                carrito = carrito.filter((carritoId) => {
                    return carritoId !== id;
                });
                renderizarCarrito();
                guardarCarritoEnLocalStorage();
            }

            function calcularTotal() {
                return carrito.reduce((total, item) => {
                    const miItem = baseDeDatos.filter((itemBaseDatos) => {
                        return itemBaseDatos.id === parseInt(item);
                    });
                    return total + miItem[0].precio;
                }, 0).toFixed(2);
            }

            function vaciarCarrito() {
                carrito = [];
                renderizarCarrito();
                localStorage.clear();
            }

            function guardarCarritoEnLocalStorage () {
                miLocalStorage.setItem('carrito', JSON.stringify(carrito));
            }

            function cargarCarritoDeLocalStorage () {
                if (miLocalStorage.getItem('carrito') !== null) {
                    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
                }
            }
            DOMbotonVaciar.addEventListener('click', vaciarCarrito);
            cargarCarritoDeLocalStorage();
            renderizarProductos();
            renderizarCarrito();
        });