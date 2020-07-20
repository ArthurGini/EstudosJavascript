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

const ehAdulto = valor => valor.idade >= 18
const temAdulto = idadeFamilia.some(ehAdulto)

console.log(temAdulto)