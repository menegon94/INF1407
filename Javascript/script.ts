let arr1: boolean[] = [];           //array de bool para todas as jogadas de moedas jogador 1
let arr2: boolean[] = [];           //array de bool para todas as jogadas de moedas computador
let arrgame : boolean[] = [];
let fatiaMoeda : string[] = [];     //array de string C ou K para as ultimas 3 jogadas

let state = 0;
let regex = /\\[b-df-hj-np-tv-z]+\[[b-df-hj-np-tv-z]+(\|[b-df-hj-np-tv-z]+)+\]/
window.onload = mudarEstado;

let btnjogaMoeda = document.getElementById("jogaMoeda");
btnjogaMoeda?.addEventListener("click",jogaMoeda);

let btnLogin = document.getElementById('btnLogin');
btnLogin?.addEventListener('click', validaEmail);

let btnInicio = document.getElementById('btnInicio');
btnInicio?.addEventListener('click', escolheOrdem);

let btnJ1 = document.getElementById('btnJ1');
btnJ1?.addEventListener('click', escolheSequencia);

let btnJ2 = document.getElementById('btnJ2');
btnJ2?.addEventListener('click', escolheSequencia);


function mudarEstado(){

    let divLogin = document.getElementById('divLogin');
    let divLogin2 = document.getElementById('divInicio');
    let divJ1 = document.getElementById('divJ1');
    let divJ2 = document.getElementById('divJ2');
    let divGame = document.getElementById('divGame');

    divLogin!.style.display = 'none';  
    divLogin2!.style.display = 'none';  
    divJ1!.style.display = 'none';  
    divJ2!.style.display = 'none';  
    divGame!.style.display = 'none';  

    if(state == 0){
        // tela de carregamento
        divLogin!.style.display = 'block';  
    }
    if(state == 1){
        // deseja iniciar?
        divLogin2!.style.display = 'block'; 
    }
    if(state == 2){
        // jogador inicia
        divJ1!.style.display = 'block'; 
    }
    if(state == 3){
        // computador inicia
        
        escolheQualquerSequencia();

        (<HTMLInputElement>document.getElementById("S3JogadaC1")).innerHTML = arr2[0] ? "Cara" : "Coroa" ;
        (<HTMLInputElement>document.getElementById("S3JogadaC2")).innerHTML = arr2[1] ? "Cara" : "Coroa" ;
        (<HTMLInputElement>document.getElementById("S3JogadaC3")).innerHTML = arr2[1] ? "Cara" : "Coroa" ;
        divJ2!.style.display = 'block'; 
    }
    if(state == 4){
        //jogo inicia
        divGame!.style.display = 'block'; 
        console.log(arr1);
        console.log(arr2);
        let J1 = (<HTMLImageElement>document.getElementById("S4Jogada1")); J1.src = arr1[0] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";
        let J2 = (<HTMLImageElement>document.getElementById("S4Jogada2")); J2.src = arr1[1] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";
        let J3 = (<HTMLImageElement>document.getElementById("S4Jogada3")); J3.src = arr1[2] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";
        let JC1 = (<HTMLImageElement>document.getElementById("S4JogadaC1")); JC1.src = arr2[0] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg"; 
        let JC2 = (<HTMLImageElement>document.getElementById("S4JogadaC2")); JC2.src = arr2[1] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";
        let JC3 = (<HTMLImageElement>document.getElementById("S4JogadaC3")); JC3.src = arr2[2] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";
        

    }

}

function pegarParametros(param : string){
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.get('product')
}

function validaEmail() {
    let email = <HTMLInputElement>document.getElementById("email");
    console.log(email.value.match(regex))
    if(email.value.match(regex)){
        state = 1;
        mudarEstado();
    }
    else{
        window.alert("E-mail inválido, tente novamente");
    }
}
function escolheOrdem() {
    let seInicia = <HTMLInputElement>document.getElementById("Sim");
    
    if(seInicia?.checked){
        state = 2; 
        mudarEstado();
    }
    else{
        state = 3;
        mudarEstado();
    }
}
function escolheSequencia() {
    // essa serve para transformar a escolha do jogador em bool para a proxima parte
    let Moeda1 = (<HTMLSelectElement>document.getElementById('S'+state+'Jogada1'));
    let Moeda2 = (<HTMLSelectElement>document.getElementById('S'+state+'Jogada2'));
    let Moeda3 = (<HTMLSelectElement>document.getElementById('S'+state+'Jogada3'));
    for(let i =0;i<Moeda1.options.length;i++){
        if(Moeda1.options[i].selected){
            arr1.push(Boolean(parseInt(Moeda1.options[i].value)));
        }
    }
    for(let i =0;i<Moeda2.options.length;i++){
        if(Moeda2.options[i].selected){
            arr1.push(Boolean(parseInt(Moeda2.options[i].value)));
        }
    }
    for(let i =0;i<Moeda3.options.length;i++){
        if(Moeda3.options[i].selected){
            arr1.push(Boolean(parseInt(Moeda3.options[i].value)));
        }
    }
    if(state == 2){
        escolheSequenciaOtima()
    } 
    state = 4;
    mudarEstado();
}

function escolheSequenciaOtima() {
    // essa serve para transformar a escolha ótima do computador em bool para a proxima parte
    arr2 = [!arr1[1],arr1[0],arr1[1]];
}

function escolheQualquerSequencia() {
    // essa serve para escolher a sequencia aleatoria do computador em bool para a proxima parte
    arr2 = [Math.random() < 0.5,Math.random() < 0.5,Math.random() < 0.5];
}

function jogaMoeda() {
    var boolAleatorio = Math.random() < 0.5;
    arrgame.push(boolAleatorio);
    console.log(arrgame);
    checaJogada(arrgame);

  }
function checaJogada(array: boolean[]){
    if (array.length < 3 ){
        if(arrgame[0] != null){let JG1 = (<HTMLImageElement>document.getElementById("S4JogadaG1")); JG1.src = arrgame[0] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg"; }
        if(arrgame[1] != null){let JG2 = (<HTMLImageElement>document.getElementById("S4JogadaG2")); JG2.src = arrgame[1] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";}
        if(arrgame[2] != null){let JG3 = (<HTMLImageElement>document.getElementById("S4JogadaG3")); JG3.src = arrgame[2] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";}
    }
    else{
        let fatia : boolean[] = arrgame.slice(-3)
        if(arrgame[0] != null){let JG1 = (<HTMLImageElement>document.getElementById("S4JogadaG1")); JG1.src = fatia[0] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg"; }
        if(arrgame[1] != null){let JG2 = (<HTMLImageElement>document.getElementById("S4JogadaG2")); JG2.src = fatia[1] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";}
        if(arrgame[2] != null){let JG3 = (<HTMLImageElement>document.getElementById("S4JogadaG3")); JG3.src = fatia[2] ? "Images/moeda_cara.jpg"  : "Images/moeda_coroa.jpg";}

        if(comparaListas(fatia,arr1)){
            console.log("Você venceu!")
            btnjogaMoeda!.innerHTML = "Você venceu!";
            btnjogaMoeda?.classList.toggle("buttonVoce")
            btnjogaMoeda?.setAttribute('disabled', '');
            
        }
        else if(comparaListas(fatia,arr2)){
            console.log("Computador venceu!") 
            btnjogaMoeda!.innerHTML = "Computador venceu!";
            btnjogaMoeda?.classList.toggle("buttonComputador")
            btnjogaMoeda?.setAttribute('disabled', '');
        }
        else{
            //pass
        }
    }
}
  function comparaListas(a : boolean[], b : boolean[]) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }