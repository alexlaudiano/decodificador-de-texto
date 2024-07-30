let opcao = "";

function codificar(texto) {
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function decodificar(texto) {
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}

function escolherOpcao(valor) {
  opcao = valor;
  processar();
}

function processar() {
  const texto = document.getElementById("textoEsquerdo").value.toLowerCase();
  let resultado = "";

  if (opcao === "codificar") {
    resultado = codificar(texto);
  } else if (opcao === "decodificar") {
    resultado = decodificar(texto);
  }
  document.getElementById("resultado").value = resultado;
  document.querySelector(".container__output__conteudo").style.display = "none";
  document.querySelector(".container__output__dados").style.display = "flex";
}

function copiarTexto() {
  const textoCopiado = document.getElementById("resultado");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

document.querySelector(".container__input__botao__criptografar").addEventListener("click", () => escolherOpcao("codificar"));
document.querySelector(".container__input__botao__descriptografar").addEventListener("click", () => escolherOpcao("decodificar"));
document.getElementById("Copiar").addEventListener("click", copiarTexto);