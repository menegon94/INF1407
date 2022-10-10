let arr1: boolean[] = [];          //array de bool para todas as jogadas de moedas
let fatiaMoeda : string[] = [];    //array de string C ou K para as ultimas 3 jogadas

let arrj1 : string[] = ['C','C','C']
let arrj2 : string[] = ['K','C','C']
let btnjogaMoeda = document.getElementById("jogaMoeda");
btnjogaMoeda?.addEventListener("click",jogaMoeda);

function jogaMoeda() {
    var boolAleatorio = Math.random() < 0.5;
    arr1.push(boolAleatorio);
    //console.log(arr1);
    checaVencedor(arr1);

  }
function checaVencedor(array: boolean[]){
    if (array.length < 3 ){
        //pass
    }
    else{
        let fatia : boolean[] = arr1.slice(-3)
        for (let i = 0; i < 3; i++) {
            fatiaMoeda[i] = fatia[i] ? "C" : "K"; // se true -> cara
          }
        console.log(fatiaMoeda);
        
        if(comparaListas(fatiaMoeda,arrj1)){
            console.log("Jogador 1 venceu!")
            btnjogaMoeda?.setAttribute('disabled', ''); 
        }
        else if(comparaListas(fatiaMoeda,arrj2)){
            console.log("Jogador 2 venceu!") 
            btnjogaMoeda?.setAttribute('disabled', '');
        }
        else{
            //pass
        }
    }
}
  //window.onload = teste;

  function comparaListas(a : string[], b : string[]) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }