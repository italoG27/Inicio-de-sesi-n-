var miUsuario = "";
var miClave = "";
//guaarda los datos y las contras del usuario en el reistro cchilero
function guardarUsuario() {
    var txtUser = document.getElementById("campoUserReg").value;
    var txtPass = document.getElementById("campoPassReg").value;


    //primer usuario que esta permitido en el registro desde "ana123" hasta "lucia99" si es correcto te va a tirar un mensaje de aviso y si no es correcto no te va a dejar registrarte primo
    if (txtUser == "ana123" && txtPass == "clave123") {
        miUsuario = txtUser;
        miClave = txtPass;
        alert("Te registrarte engazado Ahora puedes iniciar sesión primo .");
    } else {
       
    }


    if (txtUser == "carlos_dev" && txtPass == "codigo2026") {
        miUsuario = txtUser;
        miClave = txtPass;
        alert("Te registrarte engazado Ahora puedes iniciar sesión primo .");
    } else {
       
    }

    if (txtUser == "lucia99" && txtPass == "segura77") {
        miUsuario = txtUser;
        miClave = txtPass;
        alert("Te registrarte engazado Ahora puedes iniciar sesión primo .");
    } else {
        
    }

    if (txtUser == "carlos_dev" && txtPass == "codigo2026") {
        miUsuario = txtUser;
        miClave = txtPass;
        alert("Te registrarte engazado Ahora puedes iniciar sesión primo .");
    } else {
       
    }
















}
 //valida los datos que se van a ingresar en el login si es correcto te dejara pasar y si no es correcto te tira un mensaje de que los datos son incorrectos o que todavia no te registrarte con ese usuario
function validarIngreso() {
    var userIngresado = document.getElementById("campoUserLog").value;
    var passIngresada = document.getElementById("campoPassLog").value;

    if (userIngresado == miUsuario && passIngresada == miClave && miUsuario != "") {
        alert("Bienvenido a Stanlygram la red social más engazadora primo.");
        window.location.href = "stanleygram.html";
    } else {
        alert("Datos incorrectos o aún no te has registrado ponete las pilas primo.");
    }
}    

// el arrays con los datos registrados
const usuariosRegistrados = ["ana123", "carlos_dev", "lucia99"];
const contraseniasRegistradas = ["clave123", "codigo2026", "segura77"];

// datsos que va a ingresar el usuario a ver si esta bien o no 
const usuarioIngresado = "carlos_dev";
const contraseniaIngresada = "codigo2026";

let accesoPermitido = false;

// bucle de arrayts
for (let i = 0; i < usuariosRegistrados.length; i++) {
    // Comparamos el usuario y la contraseña en la misma posición 'i'
    if (usuariosRegistrados[i] === usuarioIngresado && contraseniasRegistradas[i] === contraseniaIngresada) {
        accesoPermitido = true;
        break; // se para el bucle porque se encontro el dato correcto primo
    }
}

// mensaje de aviso si es correcto o no le va a tirar distintos mensajes de aviso
if (accesoPermitido) {
    console.log("¡Acceso correcto! Bienvenido, " + usuarioIngresado);
} else {
    console.log("Usuario o contraseña incorrectos.");
}
































