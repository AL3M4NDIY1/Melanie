onload = () =>{
        document.body.classList.remove("container");
};


function validarFecha() {
        const hoy = new Date();
        const dia = hoy.getDate();
        const mes = hoy.getMonth() + 1;
    
        // Usar == o === para comparar valores
        if (dia == 14 && mes == 9) {
            // Asignar la URL a window.location.href
            window.location.href = 'FLORES.html';
        }
    }
    