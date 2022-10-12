"use strict";
let arr1 = []; //array de bool para todas as jogadas de moedas jogador 1
let arr2 = []; //array de bool para todas as jogadas de moedas computador
let arrgame = [];
let fatiaMoeda = []; //array de string C ou K para as ultimas 3 jogadas
let state = 0;
let regex = /\\[b-df-hj-np-tv-z]+\[[b-df-hj-np-tv-z]+(\|[b-df-hj-np-tv-z]+)+\]/;
window.onload = mudarEstado;
//\c[c|c|d]
let btnjogaMoeda = document.getElementById("jogaMoeda");
btnjogaMoeda === null || btnjogaMoeda === void 0 ? void 0 : btnjogaMoeda.addEventListener("click", jogaMoeda);
let btnLogin = document.getElementById('btnLogin');
btnLogin === null || btnLogin === void 0 ? void 0 : btnLogin.addEventListener('click', validaEmail);
let btnInicio = document.getElementById('btnInicio');
btnInicio === null || btnInicio === void 0 ? void 0 : btnInicio.addEventListener('click', escolheOrdem);
let btnJ1 = document.getElementById('btnJ1');
btnJ1 === null || btnJ1 === void 0 ? void 0 : btnJ1.addEventListener('click', escolheSequencia);
let btnJ2 = document.getElementById('btnJ2');
btnJ2 === null || btnJ2 === void 0 ? void 0 : btnJ2.addEventListener('click', escolheSequencia);
function mudarEstado() {
    let divLogin = document.getElementById('divLogin');
    let divLogin2 = document.getElementById('divInicio');
    let divJ1 = document.getElementById('divJ1');
    let divJ2 = document.getElementById('divJ2');
    let divGame = document.getElementById('divGame');
    divLogin.style.display = 'none';
    divLogin2.style.display = 'none';
    divJ1.style.display = 'none';
    divJ2.style.display = 'none';
    divGame.style.display = 'none';
    if (state == 0) {
        // tela de carregamento
        divLogin.style.display = 'block';
    }
    if (state == 1) {
        // deseja iniciar?
        divLogin2.style.display = 'block';
    }
    if (state == 2) {
        // jogador inicia
        divJ1.style.display = 'block';
    }
    if (state == 3) {
        // computador inicia
        escolheQualquerSequencia();
        document.getElementById("S3JogadaC1").innerHTML = arr2[0] ? "Cara" : "Coroa";
        document.getElementById("S3JogadaC2").innerHTML = arr2[1] ? "Cara" : "Coroa";
        document.getElementById("S3JogadaC3").innerHTML = arr2[1] ? "Cara" : "Coroa";
        divJ2.style.display = 'block';
    }
    if (state == 4) {
        divGame.style.display = 'block';
        console.log(arr1);
        console.log(arr2);
        let J1 = document.getElementById("S4Jogada1");
        J1.src = arr1[0] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        let J2 = document.getElementById("S4Jogada2");
        J2.src = arr1[1] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        let J3 = document.getElementById("S4Jogada3");
        J3.src = arr1[2] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        let JC1 = document.getElementById("S4JogadaC1");
        JC1.src = arr2[0] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        let JC2 = document.getElementById("S4JogadaC2");
        JC2.src = arr2[1] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        let JC3 = document.getElementById("S4JogadaC3");
        JC3.src = arr2[2] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
    }
    //divLogin!.style.display = 'none'; 
}
function pegarParametros(param) {
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.get('product');
}
function validaEmail() {
    let email = document.getElementById("email");
    console.log(email.value.match(regex));
    if (email.value.match(regex)) {
        state = 1;
        mudarEstado();
    }
}
function escolheOrdem() {
    let seInicia = document.getElementById("Sim");
    if (seInicia === null || seInicia === void 0 ? void 0 : seInicia.checked) {
        state = 2;
        mudarEstado();
    }
    else {
        state = 3;
        mudarEstado();
    }
}
function escolheSequencia() {
    // essa serve para transformar a escolha do jogador em bool para a proxima parte
    let Moeda1 = document.getElementById('S' + state + 'Jogada1');
    let Moeda2 = document.getElementById('S' + state + 'Jogada2');
    let Moeda3 = document.getElementById('S' + state + 'Jogada3');
    for (let i = 0; i < Moeda1.options.length; i++) {
        if (Moeda1.options[i].selected) {
            arr1.push(Boolean(parseInt(Moeda1.options[i].value)));
        }
    }
    for (let i = 0; i < Moeda2.options.length; i++) {
        if (Moeda2.options[i].selected) {
            arr1.push(Boolean(parseInt(Moeda2.options[i].value)));
        }
    }
    for (let i = 0; i < Moeda3.options.length; i++) {
        if (Moeda3.options[i].selected) {
            arr1.push(Boolean(parseInt(Moeda3.options[i].value)));
        }
    }
    if (state == 2) {
        escolheSequenciaOtima();
    }
    state = 4;
    mudarEstado();
}
function escolheSequenciaOtima() {
    // essa serve para transformar a escolha ótima do computador em bool para a proxima parte
    arr2 = [!arr1[1], arr1[0], arr1[1]];
}
function escolheQualquerSequencia() {
    // essa serve para escolher a sequencia aleatoria do computador em bool para a proxima parte
    arr2 = [Math.random() < 0.5, Math.random() < 0.5, Math.random() < 0.5];
}
function jogaMoeda() {
    var boolAleatorio = Math.random() < 0.5;
    arrgame.push(boolAleatorio);
    console.log(arrgame);
    checaJogada(arrgame);
}
function checaJogada(array) {
    if (array.length < 3) {
        if (arrgame[0] != null) {
            let JG1 = document.getElementById("S4JogadaG1");
            JG1.src = arrgame[0] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        }
        if (arrgame[1] != null) {
            let JG2 = document.getElementById("S4JogadaG2");
            JG2.src = arrgame[1] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        }
        if (arrgame[2] != null) {
            let JG3 = document.getElementById("S4JogadaG3");
            JG3.src = arrgame[2] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        }
    }
    else {
        let fatia = arrgame.slice(-3);
        if (arrgame[0] != null) {
            let JG1 = document.getElementById("S4JogadaG1");
            JG1.src = fatia[0] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        }
        if (arrgame[1] != null) {
            let JG2 = document.getElementById("S4JogadaG2");
            JG2.src = fatia[1] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        }
        if (arrgame[2] != null) {
            let JG3 = document.getElementById("S4JogadaG3");
            JG3.src = fatia[2] ? "moeda_cara.jpg" : "moeda_coroa.jpg";
        }
        if (comparaListas(fatia, arr1)) {
            console.log("Jogador 1 venceu!");
            btnjogaMoeda.innerHTML = "Jogador 1 venceu!";
            btnjogaMoeda === null || btnjogaMoeda === void 0 ? void 0 : btnjogaMoeda.setAttribute('disabled', '');
        }
        else if (comparaListas(fatia, arr2)) {
            console.log("Jogador 2 venceu!");
            btnjogaMoeda.innerHTML = "Jogador 2 venceu!";
            btnjogaMoeda === null || btnjogaMoeda === void 0 ? void 0 : btnjogaMoeda.setAttribute('disabled', '');
        }
        else {
            //pass
        }
    }
}
function comparaListas(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
