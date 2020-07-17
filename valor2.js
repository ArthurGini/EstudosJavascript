function maisBaratosQue(valor, precos) {
  return precos.filter(p => p <= valor);
}

function maisCarosQue(valor, precos){
  return precos.filter(p => p >= valor);
}

precos = [0,1,2,3,4,5,6,7,8,9,10]

maisBaratosQue(10,precos)
maisCarosQue(5,precos)


function precosEntre(valorMenor, valorMaior, precos){

baratos = maisBaratosQue(valorMaior,precos)
caros = maisCarosQue(valorMenor,precos)

var teste = baratos.filter(x => caros.includes(x));

 console.log(teste)
 /*
for (var i=0; i<= precos.length; i++){
  if(caros[i] = baratos[i]){
    console.log(precos[i])
   }
 }
 */
}

precosEntre(5,10,precos)