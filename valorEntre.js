function maisBaratosQue(valor, precos) {
  return precos.filter(p => p <= valor);
}

function maisCarosQue(valor, precos){
  return precos.filter(p => p >= valor);
}

function precosEntre(valorMenor, valorMaior, precos){
 
  barato = maisBaratosQue(valorMenor,precos)//array barato
  caro = maisCarosQue(valorMaior,precos)//array caro
  
  
  for (var b=0; b<= barato.length; b++){
    if (barato[b] >= valorMenor){
      console.log(barato[b])
    }
  }
  for (var c=0; c<= caro.length; c++){
    if (caro[c] <= valorMaior){
      console.log(caro[c])
    }
  }

  /*
  for (var i=0; i<precos.length; i++){
    if (precos[i] >= valorMenor && precos[i] <= valorMaior){
      console.log(precos[i])
    }
  }
  */
}

precos = [0,1,2,3,4,5,6,7,8,9,10]
precosEntre(5,10,precos)
