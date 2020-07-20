const celsius = [0,15,32,40]
const toFahrenheit = value => ((value *9)/5)+32
const Fahrenheit = celsius.map(toFahrenheit)

console.log("Celsius: " + celsius)
console.log("Fahrenheit: "+ Fahrenheit)