const bolsa = [
    'cartao de credito',
    'chaves',
    'dinheiro',
    'passe do onibus',
    'alcool gel'
]

let index = 0
do {
    console.log('${index + 1}. ${bolsa[index]}');
    index++
}
while (index < bolsa.length)