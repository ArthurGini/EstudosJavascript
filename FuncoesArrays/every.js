const idadeFamilia =[{
        nome: 'Arthur',
        idade: 21
    },
    {
        nome: 'Amanda',
        idade: 25
    },
    {
        nome: 'Claudia',
        idade: 51
    },
    {
        nome: 'Marcos',
        idade: 54
    },
    {
        nome: 'Balder',
        idade: 2
    },
]
//O every tem retorno booleano, a função retorne TRUE caso todos os objetos são maiores de 18
const ehAdulto = valor => valor.idade >= 18
const somenteAdulto = idadeFamilia.every(ehAdulto)

console.log(somenteAdulto)
//Ou seja somenteAdulto = false
