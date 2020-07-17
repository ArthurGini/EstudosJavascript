personagens = ["Hermione", "Trinity", "Leia"]
filmes = ["Harry Potter", "Matrix", "Star wars"]
lancamentos = [2001, 1999, 1977]
id = 3

// Escreva abaixo o seu código:
function filme(personagens, filmes, lancamentos, id)
{
    if (id > 3){
        console.log("Essa não é uma opção válida.")
    }
    else if (id == 3){
        console.log("Leia é um personagem do filme Star wars que estreou no cinema em 1977.")
    }
    else{
        console.log(personagens[id]+" é um personagem do filme "+ filmes[id]+" que estreou no cinema em " +lancamentos[id] + ".")
                    "personagem é um personagem do filme filme que estreou no cinema em lançamento."
    }
}

filme(personagens,filmes,lancamentos,3)