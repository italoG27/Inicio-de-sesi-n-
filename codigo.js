var miUsuario = "";
var miClave = "";

function guardarUsuario() {
    var txtUser = document.getElementById("campoUserReg").value;
    var txtPass = document.getElementById("campoPassReg").value;

    if (txtUser == "admin" && txtPass == "1234") {
        miUsuario = txtUser;
        miClave = txtPass;
        alert("Te registrarte engazado Ahora puedes iniciar sesión primo .");
    } else {
        alert("Para registrarte bien chilero, el usuario debe ser 'admin' y la contraseña '1234'");
    }
}

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