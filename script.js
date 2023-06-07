let nombreApellido = prompt("Ingrese su nombre y apellido"),
  horario = prompt("Ingrese horario de reserva (usar numeros unicamente)"),
  cantidadPersonas = prompt(
    "Especifique la cantidad de personas que asistiran (Use numeros unicamente)"
  );

while (cantidadPersonas <= 50) {
  alert("Tenemos mesas disponibles");
  break;
  cantidadPersonas++;
}

let costoTenedor = cantidadPersonas * 500

menuElegido = parseInt(prompt(
  "Ingrese el/los menu/s deseado/s (Ingrese todos los menus elegidos utilizando un espacio de por medio, ej: menu1 menu2 menu3 menu4)"
));

if ((menuElegido >= 5, null)) {
  alert("No tenemos ese menú");
}

ubicacionLocal = prompt(
  "Ingrese el numero asignado para el local que seleccionó."
);

if (ubicacionLocal >= 4) {
  alert("Ese local no existe.");
}

//PRECIO DE MENUS
let menus = {
  menu1: "7895",
  menu2: "5430",
  menu3: "3380",
  menu4: "13.920",
  menu5: "9550",
};

if (menuElegido = "menu1") {
  menuElegido = 7895
} 
else if (menuElegido = "menu2") {
  menuElegido = 5430
} 
else if (menuElegido = "menu3") {
  menuElegido = 3380
} 
else if (menuElegido = "menu4") {
  menuElegido = 13920
} 
else if (menuElegido = "menu5") {
  menuElegido = 9550
}

let precioFinal = costoTenedor + menuElegido

let suma = alert("El valor total sera de $" + precioFinal);

if (cantidadPersonas >= 50 || ubicacionLocal >= 4) {
  alert(
    "Esta reserva sera anulada ya que no cumple los requisitos solicitados"
  );
} else {
  confirmacion = alert(
    "Lo esperamos a las " + horario + "hs sr/a " + nombreApellido
  );
}

function datosIngresados() {
  console.log(nombreApellido);
  console.log(horario);
  console.log(cantidadPersonas);
  console.log(menuElegido);
  console.log(ubicacionLocal);
}
