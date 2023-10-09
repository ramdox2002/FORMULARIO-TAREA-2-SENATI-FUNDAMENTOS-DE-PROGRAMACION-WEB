document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("table");
  
    // Recuperar los valores almacenados en localStorage
    const name = localStorage.getItem("name");
    const lastname = localStorage.getItem("lastname");
    const email = localStorage.getItem("email");
    const hobby = localStorage.getItem("hobby");
  
    // Crear una nueva fila en la tabla
    const row = table.insertRow();
    row.classList.add("container__table__tr");

    // Agregar celdas con los valores recuperados
    const cellName = row.insertCell(0);
    cellName.innerHTML = name;
  
    const cellLastname = row.insertCell(1);
    cellLastname.innerHTML = lastname;
  
    const cellEmail = row.insertCell(2);
    cellEmail.innerHTML = email;
  
    const cellHobby = row.insertCell(3);
    cellHobby.innerHTML = hobby;
  });
  