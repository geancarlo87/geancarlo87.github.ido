let boton_menu=document.getElementById('boton_menu');
let menu=document.getElementById('menu');

boton_menu.addEventListener('click', function() { //cuando hagan clic en el botón con id 'boton_menu'
    //Ejecutar las siguientes instrucciones
    menu.classList.toggle('mostrar');
});