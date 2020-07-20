const numeros = [0,1,2,3,4,5,6,7,8,9,10]
const par = n => n % 2 === 0
const numerosPar = numeros.filter(par)

console.log(numeros)
console.log(numerosPar)

console.log('numeros par: ${numerosPar} ')