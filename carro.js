//laços de repetição
let yCarros=[40,96,150,210,270,318];
let velocidadeDeCarros=[3.5,3,4,5,2.5,3.2];
let xCarros=[600,600,600,600,600,600];
let comprimentoCarro=50
let alturaCarro=40


let posicaoInicial=600

function mostraCarro(){
  for (let i=0; i<imagemCarros.length; i++){
  image (imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
  }
     
}

function movimentaCarro(){
 for (let i=0; i<imagemCarros.length; i++){
  xCarros[i]-=velocidadeDeCarros[i];
 }
}

function voltaPosicaoInicial(){
  for(let i=0; i<imagemCarros.length;i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i]=posicaoInicial
    }
  }
}
  
function passouTodaTela(xCarros){
  return xCarros<-50;
}