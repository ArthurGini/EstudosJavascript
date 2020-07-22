/*
Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e um array com a lista de todos os episódios da série.
 A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.
*/

prefixo = "Harry Potter";
array = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];

function series(prefixo, array){
  // Escreve sua função abaixo:
  var Harry =[]
  var resultado =[ ]
  var ultimo =[]

  //Inicio da frase
  Harry.push(prefixo).toString()
  Harry += " "

  //Final da frase
  ultimo = array.pop().toString()
  var res = Harry.concat(ultimo)
  
  res

  for (var i=1; i< array.length; i++){    
  resultado[1] = resultado.push(res)
  resultado
  }


  
  /*
    //primeiro
    resultado.push(prefixo) //Add o inicio
    ultimo = array.pop() //pega o ultimo valor do array
    resultado.push(ultimo) //add o ultimo valor
    resultado = resultado.toString() //converte o prefixo + ultimo pra string 
    final.push(resultado) //pega o resultado e soma no array 
    console.log(resultado);
    
    console.log(final);
    return final
  }
*/

}

series(prefixo,array)
/*
resultado = [
    "Harry Potter e a Pedra Filosofal",
    "Harry Potter e a Câmara Secreta",
    "Harry Potter e o Prisioneiro de Azkaban",
    "Harry Potter e o Cálice de Fogo",
    "Harry Potter e a Ordem da Fênix",
    "Harry Potter e o Enigma do Príncipe",
    "Harry Potter e as Relíquias da Morte"
  ];

  
    //segundo
    resultado.push(prefixo)
    ultimo = array.pop()
    resultado.push(ultimo)

    //terceiro
    resultado.push(prefixo)
    ultimo = array.pop()
    resultado.push(ultimo)
    
    //quarto
    resultado.push(prefixo)
    ultimo = array.pop()
    resultado.push(ultimo)

    //quinto
    resultado.push(prefixo)
    ultimo = array.pop()
    resultado.push(ultimo)

    //sexto
    resultado.push(prefixo)
    ultimo = array.pop()
    resultado.push(ultimo)

    //Setimo
    resultado.push(prefixo)
    ultimo = array.pop()
    resultado.push(ultimo)

    //resultado = resultado.toString()
    //console.log(resultado);
    
  
  */