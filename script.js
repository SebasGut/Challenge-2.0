function encriptar() {
  mensaje = document.querySelector("#input-mensaje").value;
  mensajeCifrado = mensaje
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.querySelector("#output-mensaje").value = mensajeCifrado;
  visibiliti();
}

function desencriptar() {
  mensaje = document.querySelector("#input-mensaje").value;
  mensajeCifrado = mensaje
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.querySelector("#output-mensaje").value = mensajeCifrado;
  visibiliti();
}

function limpiar() {
  document.querySelector("#input-mensaje").value = null;
}

function copiar() {
  var copiar = document.querySelector("#output-mensaje").value;
  navigator.clipboard.writeText(copiar);
  alert("El mensaje encriptado fue copiado");
  document.querySelector("#output-mensaje").value = null;
  visibiliti();
}
function visibiliti() {
  var vis = document.querySelector("#output-mensaje").value;
  if (vis.length > 0) {
    document.querySelector(".textoIn").style.display = "block";
    document.querySelector(".noTexto").style.display = "none";
  } else {
    document.querySelector(".textoIn").style.display = "none";
    document.querySelector(".noTexto").style.display = "block";
  }
}
