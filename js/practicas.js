if (condition) {
    
} else {
    
}

if (departamento === null || departamento === "") {
    alert("Opcion invalida");
  } else {
    departamento = departamento.toLowerCase();
    if (
      departamento === "Cundinamarca" ||
      departamento === "quindio" ||
      departamento === "antioquia" ||
      departamento === "Cundinamarca" ||
      departamento === "valle"
    ) {
      alert("Es un derpartamento registrado");
    } else {
      // iF ANIDADOS
      if (
        departamento === "Bogota" ||
        departamento === "Bogotá" ||
        departamento === "armenia" ||
        departamento === "medellin" ||
        departamento === "cali"
      ) {
        alert("Es la Capital");
      } else {
        alert("Favor ingresar solo departamentos registrados");
      }
    }
  }
  
  /**
   * 2 -
   */
  