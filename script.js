let entrada = document.getElementById("text-input");
let boton = document.getElementById("check-btn");
let resultado = document.getElementById("result");
let btnReset = document.getElementById("reset-btn");
let oculto = false;

function esPalindromo(texto) {
  let str = String(texto);
  let limpio = limpiar(str);
  let reverso = limpio.split("").reverse().join("");

  // si no hay valor, alerta
  if (entrada.value === "") {
    return alert("Por favor, introduzca un valor");
  }

  // si es una letra
  if (limpio.length == 1) {
    return resultado.innerText = `${str} \nEs un palíndromo`;
  }

  // comparar una cadena con la cadena al revés
  if (limpio === reverso) {
    return resultado.innerText = `${str} \nEs un palíndromo`;
  } else {
    return resultado.innerText = `${str} \nNo es un palíndromo`;
  }
}

// Regex, limpiar string
const limpiar = (texto) => {
  const regex = /[\\\-_(),/.\s]/ig;
  return texto.replace(regex, "").toLowerCase();
}

// resultado
boton.addEventListener("click", () => {
  esPalindromo(entrada.value);
  oculto = true;
  ocultar();
});

// poner enter como boton
entrada.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    boton.click();
  }
});

// resetear
btnReset.addEventListener("click", () => {
  resultado.innerText = "";
  entrada.value = "";
  oculto = false;
  ocultar();
});

// ocultar boton de reset
const ocultar = () => {
  btnReset.style.display = oculto ? "block" : "none";
}