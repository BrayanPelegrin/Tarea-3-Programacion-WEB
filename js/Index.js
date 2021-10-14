function getContactos() {
  fetch("http://www.raydelto.org/agenda.php")
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos))
    .catch((error) => console.log(error));
  const mostrarDatos = (datos) => {
    console.log(datos);
    let body = "";
    for (let i = 0; i < datos.length; i++) {
      body += `    
            <tr><td>${datos[i].nombre}</td><td>${datos[i].apellido}</td><td>${datos[i].telefono}</td></tr>
        `;
    }
    document.getElementById("tablaCuerpo").innerHTML = body;
  };
}

function enviarContactos() {
  var newPost = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    telefono: document.getElementById("telefono").value,
  };

  fetch("http://www.raydelto.org/agenda.php", {
    method: "POST",
    body: JSON.stringify(newPost),
  })
    .then((respon) => respon.json())
    .then((respuesta) => console.log(respuesta));
  acciones();
}

function acciones() {
  alert(`Contacto enviado Exitosamente`);
  nombre = new document.getElementById("nombre");
  apellido = new document.getElementById("apellido");
  telefono = new document.getElementById("telefono");
  nombre.innerHTML = "";
  apellido.innerHTML = "";
  telefono.innerHTML = "";
  getContactos();
}
getContactos();
