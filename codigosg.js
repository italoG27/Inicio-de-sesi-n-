// Arreglos donde se guardarán todos los usuarios y contraseñas que se vayan registrando
const usuariosRegistrados = [];
const contraseniasRegistradas = [];

function guardarUsuario() {
    // Obtenemos los valores de los campos HTML del registro
    var txtUser = document.getElementById("campoUserReg").value.trim();
    var txtPass = document.getElementById("campoPassReg").value.trim();

    // Validamos que los campos no estén vacíos
    if (txtUser === "" || txtPass === "") {
        alert("Por favor llena todos los campos para registrarte, primo.");
        return;
    }

    // Comprobamos si el usuario ya fue registrado anteriormente
    if (usuariosRegistrados.includes(txtUser)) {
        alert("Ese usuario ya existe. Elegí otro nombre, primo.");
        return;
    }

    // Guardamos el nuevo usuario y su contraseña en los arreglos
    usuariosRegistrados.push(txtUser);
    contraseniasRegistradas.push(txtPass);

    alert("¡Usuario " + txtUser + " registrado con éxito! Ya podés iniciar sesión.");

    // Opcional: limpiar los campos del formulario tras registrarse
    document.getElementById("campoUserReg").value = "";
    document.getElementById("campoPassReg").value = "";
}


function validarIngreso() {
    // Obtenemos los valores ingresados en el Login
    var userIngresado = document.getElementById("campoUserLog").value.trim();
    var passIngresada = document.getElementById("campoPassLog").value.trim();

    if (userIngresado === "" || passIngresada === "") {
        alert("Ingresá tu usuario y contraseña para iniciar sesión.");
        return;
    }

    let accesoPermitido = false;

    // Recorremos los arreglos para verificar si las credenciales coinciden
    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i] === userIngresado && contraseniasRegistradas[i] === passIngresada) {
            accesoPermitido = true;
            break; // Detener el bucle porque ya lo encontró
        }
    }

    // Respuesta según la verificación
    if (accesoPermitido) {
        alert("Bienvenido a nuestra pagina de reparaciones chileras primo.");
        window.location.href = "prueba.html";
    } else {
        alert("Datos incorrectos o aún no te has registrado, ponete las pilas primo.");
    }
}