"use strict";
let arr1 = []; //array de bool para todas as jogadas de moedas
let fatiaMoeda = []; //array de string C ou K para as ultimas 3 jogadas
let arrj1 = ['C', 'C', 'C'];
let arrj2 = ['K', 'C', 'C'];
let btnjogaMoeda = document.getElementById("jogaMoeda");
btnjogaMoeda === null || btnjogaMoeda === void 0 ? void 0 : btnjogaMoeda.addEventListener("click", jogaMoeda);
function jogaMoeda() {
    var boolAleatorio = Math.random() < 0.5;
    arr1.push(boolAleatorio);
    //console.log(arr1);
    checaVencedor(arr1);
}
function checaVencedor(array) {
    if (array.length < 3) {
        //pass
    }
    else {
        let fatia = arr1.slice(-3);
        for (let i = 0; i < 3; i++) {
            fatiaMoeda[i] = fatia[i] ? "C" : "K"; // se true -> cara
        }
        console.log(fatiaMoeda);
        if (comparaListas(fatiaMoeda, arrj1)) {
            console.log("Jogador 1 venceu!");
            btnjogaMoeda === null || btnjogaMoeda === void 0 ? void 0 : btnjogaMoeda.setAttribute('disabled', '');
        }
        else if (comparaListas(fatiaMoeda, arrj2)) {
            console.log("Jogador 2 venceu!");
            btnjogaMoeda === null || btnjogaMoeda === void 0 ? void 0 : btnjogaMoeda.setAttribute('disabled', '');
        }
        else {
            //pass
        }
    }
}
//window.onload = teste;
function comparaListas(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
