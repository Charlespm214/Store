const botonContacto = document.querySelector('.btnContacto');
const modal = document.querySelector('.modal');
const cerrar = document.querySelector('.aSalir'); 
botonContacto.addEventListener('click', ()=>
    {
        modal.classList.add('modal--Mostrar')
    })
cerrar.addEventListener('click', ()=>
    {
        modal.classList.remove('modal--Mostrar')      
    })

function borrarForm()
    {
        document.addEventListener('DOMContentLoaded',function()
            {
                var botonBorrar=document.getElementById('btnBorrar');
                botonBorrar.addEventListener('click',function()
                    {
                        document.getElementById('names').value="";
                        document.getElementById('email').value="";
                        document.getElementById('celular').value="";
                        document.getElementById('mensaje').value="";
                    })
            })
    }
borrarForm()
// ------------------------
function enviarForm()
    {
        let names;
        let email;
        let celular;
        let mensaje;
        let texto;

        document.addEventListener('DOMContentLoaded', function()
            {
                var botonEnviar=document.getElementById('btnEnviar');
                botonEnviar.addEventListener('click', function()
                    {
                        names=document.getElementById('names').value
                        email=document.getElementById('email').value
                        celular=document.getElementById('celular').value
                        mensaje=document.getElementById('mensaje').value
                    
                            document.getElementById('names').value=names;
                            document.getElementById('email').value=email;
                            document.getElementById('celular').value=celular;
                            document.getElementById('mensaje').value=mensaje;
    
                    // let cel=celular.toString()
                    texto = ("Nombre: "+names+" "+"Email: "+email+" "+"Celular: "+(celular).toString()+" "+"Mensaje: "+mensaje)
                    console.log(texto)
                    alert(texto)
                    })
            })
    }
enviarForm()