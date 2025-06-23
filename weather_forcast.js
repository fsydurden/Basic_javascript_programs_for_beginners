const kelvin = 0; //we declare that this variable is a constant and does not change value.
//console.log(kelvin); //checks the value of kelvin
let celsius = kelvin - 273; //we convert kelvin into celcius by substracting 273 from kelvin temparture.
//console.log(celsius); //checks celcius
let fahrenheit = celsius *(9/5)+32; //equation to convert celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit); //we round off fahrenheit and save it it variable.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

//extra work

let newton = Math.floor(celsius*(33/100));
console.log(`The Temprature is ${newton} Newton`);
