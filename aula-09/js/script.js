frase = "";

function myFunction() {
    for(i=0; i<5; i++) { //ele vai ser executado 5x
        frase = frase + "Olá Mundo! ";
    }
    document.getElementById("x").innerText = frase;
}

function gerarTabuada() {
    num = document.getElementById("num").value;
    //pegamos o id num e usamos a propriedade especifica value
    resultado = "";
    if((num >= 1) && (num <= 10)) {
        for(i=1; i<10; i++) {
        resultado = resultado + num + " x " + i + " = " + (num * i) + "\n";
        }
    } else {
        alert("Número incorreto! Digite um número entre 1 e 10.");
        document.frmTab.num.value = ""; //DOM - document object model
        document.frmTab.num.focus(); //cursor automaticmanete no campo que a gente quer
    }
    document.getElementById("tabuada").innerText = resultado;
}

function limparTabuada() {
    document.getElementById("tabuada").innerText = "";
    document.getElementById("num").value = "";
    document.getElementById("num").focus();
}

/* pode-se fazer no formato DOM tambem:

    function limparTabuada() {
    document.frmTab.tabuada.innerText = "";
    document.frmTab.num.value = "";
    document.frmTab.num.focus();
}
    
*/