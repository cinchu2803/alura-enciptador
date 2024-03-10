const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i< matrizCodigo.length; i++){
            //un for que recorra todoel sring, y que termine cuando termine mi string y haga odo el recorrido
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

        }
        
        return  stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i< matrizCodigo.length; i++){
            //un for que recorra todoel sring, y que termine cuando termine mi string y haga odo el recorrido
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

        }
        
        return  stringDesencriptado
    }

// function textoCopiado(){
//     var aCopiar = document.getElementsByClassName("btn-copiar");

//     aCopiar.select();
//     aCopiar.setSelectionRange(0, 99999);

//     navigator.clipboard.writeText(aCopiar.value);
//     alert("Texto copiado con exito");
// }
function textoCopiado() {
    // Get the text field
    var paraCopiar = document.getElementById("mensaje");
  
    // Select the text field
    paraCopiar.select();
    paraCopiar.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(paraCopiar.value);
  
    // Alert the copied text
    alert("Texto copiado con exito");
  }