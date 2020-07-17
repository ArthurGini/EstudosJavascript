// seu código vem aqui!

var notas=[1,1,3,3,5,5]

function calculaGostos(notas){
    var dislike =0
    var like =0
    var superlike=0
    for (var i=0; i < notas.length; i++){
        if (notas[i] <= 1){
            dislike++
            //console.log(notas[i])
        }
        else if (notas[i] >= 2 && notas[i] <= 3){
            like++
            //console.log("2: "+notas[i])
        }
        else if (notas[i] >= 4){
            superlike++
        }
    }
    var resultado = []
    resultado.push(dislike)
    resultado.push(like)
    resultado.push(superlike)
    console.log(resultado)
    return resultado
}
calculaGostos(notas)