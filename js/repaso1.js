/**
 * 1 -
 * Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * alert("opcion no valida")
 * Dependiendo de que departamento es debe mostrar cual es la capital
 */
let departamento = prompt("Ingrese departamento");

if (departamento === null || departamento === "") {
  alert("Opcion invalida");
} else {
  departamento = departamento.toLowerCase();
  if (
    departamento === "cundinamarca" ||
    departamento === "quindio" ||
    departamento === "antioquia" ||
    departamento === "valle"
  ) {
    alert("Es un derpartamento registrado");
  } else {
    // iF ANIDADOS
    if (departamento === "cundinamarca") {
      alert("la Capital es bogota");
    } else {
      alert("Favor ingresar solo departamentos registrados");
    }
  }
}
