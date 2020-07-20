const sobremesas = [{
    nome: 'pudim',
    diet: false
},
{
    nome: 'gelatina',
    diet: true
},
{
    nome: 'bolo',
    diet: false
},
{
    nome: 'pave',
    diet: true
},
];

const idDiet = item => item.diet
//Se utilizar o filter ele retorna todos os valores que forem TRUE
const sobremesa = sobremesas.find(idDiet)
console.log(sobremesa);
