const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre            = document.getElementById("nombre");
let divErrorNombre    = document.getElementById("mensajeErrorNombre");
let apellido          = document.getElementById("apellido");
let divErrorApellido  = document.getElementById("mensajeErrorApellido");
let mail              = document.getElementById("email");
let divErrorMail      = document.getElementById("mensajeErrorEmail");
let cantidadTickets   = document.getElementById("cantidadTickets");
let divErrorTickets   = document.getElementById("mensajeErrorTickets");
let categoria         = document.getElementById("categoriaSelect");
let divErrorCategoria = document.getElementById("mensajeErrorCategoria");

const quitarClaseError = () => {

    let listaNodos = document.querySelectorAll(".form-Control, .form-Select");
    for (let i = 0; i < listaNodos.length; i++) {
        listaNodos[i].classList.remove('is-invalid');
    }
    let listaNodosDiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosDiv.length; i++) {
        listaNodosDiv[i].classList.remove('propia');
    }
}
   
const totalAPagar = () => {

    quitarClaseError();

    if (nombre.value === "" ) {
       // alert("Por favor, escribi tu nombre");
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("propia");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        // alert("Por favor, escribi tu apellido");
         apellido.classList.add("is-invalid");
         divErrorApellido.classList.add("propia");
         apellido.focus();
         return;
     }

     if (mail.value === "" ) {
        //alert("Por favor, escribi tu email");
         mail.classList.add("is-invalid");
         divErrorMail.classList.add("propia");
         mail.focus();
         return;
     }

     const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }

     if (!emailValido(mail.value)) {
        //alert("Por favor, ingrese un correo electronico valido.");
        mail.classList.add("is-invalid");
        divErrorMail.classList.add("propia");
        mail.focus();
        return;
     }

     if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        //alert("Por favor, ingrese correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        divErrorTickets.classList.add("propia");
        cantidadTickets.focus();
        return;   
     }

     if (categoria.value == "") {
        //alert("Por favor, selecciona una categoria.");
        categoria.classList.add("is-invalid");
        divErrorCategoria.classList.add("propia");
        categoria.focus();
        return;
     }

     let totalValorTickets = (cantidadTickets.value) * valorTicket;

     switch (categoria.value) {
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
     }

     totalDePago.innerHTML = totalValorTickets;

    }

    btnResumen.addEventListener('click', totalAPagar);

    const resetTotalAPagar = () => {

        quitarClaseError();
        totalDePago.innerHTML = "";
    }

    btnBorrar.addEventListener('click', resetTotalAPagar);
