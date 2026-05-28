document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Captura los datos del formulario
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const academicProfile = document.getElementById("academicProfile").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const bootcamp = document.getElementById("bootcamp").value;

    // Crea un mensaje de agradecimiento
    const thankYouMessage = `Gracias por mostrar interés en nuestro bootcamp de ${bootcamp}. Aquí están tus datos:
    Nombre: ${firstName} ${lastName}
    Perfil Académico: ${academicProfile}
    Edad: ${age}
    Sexo: ${gender}
    Correo Electrónico: ${email}
    Número de Teléfono: ${phone}
    Mensaje: ${message}`;

    // Muestra el mensaje en el HTML
    const resultDiv = document.createElement("div");
    resultDiv.textContent = thankYouMessage;
    document.body.appendChild(resultDiv);

    /* da estilos al mensaje de agradecimiento  que no esté alargado*/
    resultDiv.style.border = "1px solid #000";
    resultDiv.style.padding = "10px";
    resultDiv.style.marginTop = "20px";
    resultDiv.style.width = "600px";
    /* Quiero que los estilos estén centrados del agradecmient */
    resultDiv.style.marginLeft = "auto";
    resultDiv.style.marginRight = "auto";
  });
