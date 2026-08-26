var miUsuario = "";
var miClave = "";

function guardarUsuario() {
    var txtUser = document.getElementById("campoUserReg").value;
    var txtPass = document.getElementById("campoPassReg").value;

    if (txtUser == "admin" && txtPass == "1234") {
        miUsuario = txtUser;
        miClave = txtPass;
        alert("Te registrarte engazado Ahora puedes iniciar sesión primo .");
    }
}    