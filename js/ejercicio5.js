//Logica y algoritmo

let userName = "";
let age = "";
let dni = "";
let email = "";
let celPhone = "";
let civilStatus = "";
let salary = "";

function registerData() {
  userName = prompt("escribe tu nombre");
  age = prompt("ingresa tu edad");
  dni = prompt("enter ID number");
  email = prompt("enter email");
  celPhone = prompt("enter celPhone");
  civilStatus = prompt(" enter civilStatus");
  salary = prompt("enter salary");
}

function showDate() {
  alert(
    " Tu nombre es: " +
      userName +
      " y tu edad es: " +
      age +
      " enter ID number: " +
      dni +
      " enter email: " +
      email +
      " enter celPhone: " +
      celPhone +
      " enter civilStatus: " +
      civilStatus +
      " enter salary: " +
      salary
  );
}
