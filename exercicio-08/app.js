/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

 function  multiply (number1 = 0, number2 = 0){
 return  number1 * number2
}

console.log(multiply(5, 6))
/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/


const divide = function (number1 = 0, number2 = 0 ){
  return number1 / number2
}

console.log(divide(10, 5))
/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

// function showMessage (value = 'x'){

//   return `Esta é a ${value}ª vez que essa string é exibida.`
// }

// for (let i = 0; i < 7; i++ ){

// let counter = i + 1 
//   console.log(showMessage(counter))
// }

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

const transformToUppercase = function (array = []) {
  let newArray = []
  
  for (let i = 0; i < array.length; i++) {

    const wordsInUpperCase = array[i].toUpperCase()
    newArray.push(wordsInUpperCase)
  } 

  return newArray
}

const millennialWordsInUpperCase = transformToUppercase(millennialWords)

// console.log(millennialWordsInUpperCase)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

//--------------RESOLUÇÃO DO ROGER ----------------------------

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

let positiveNumbersCouter = 0
let negativeNumbersCouter = 0

const isPositive = function (number = 0) {
  return number >= 1 
}
for (let i = 0; i < randomNumbers.length; i++){
  const isPositiveNumber = isPositive(randomNumbers[i])

  if(isPositiveNumber) {
    positiveNumbersCouter++
  }else{
    negativeNumbersCouter++
  }
}

console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${positiveNumbersCouter} positivos e ${negativeNumbersCouter} negativos`)

//-----------------------------------------------------------------


//-------------------MINHA RESOLUÇÃO----------------------------

// const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
// let numbersPositiveCounter = 0
// let numbersNegativeCounter = 0


// const getPositiveAndNegativeNumbers = function (array = []) {

//   for (let i = 0; i < array.length;  i++){
//     let itemOfArray = array[i]
//     let numberOfArrayPositive = itemOfArray > 0
//     let numberOfArrayNegative = itemOfArray < 0
    
//     if(numberOfArrayPositive){
//       numbersPositiveCounter ++

//     }else if(numberOfArrayNegative){
//       numbersNegativeCounter ++
//     }
     
//   } 
// }
// getPositiveAndNegativeNumbers(randomNumbers)

// console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${numbersPositiveCounter} positivos e ${numbersNegativeCounter} negativos.`)

//-------------------------------------------------------------------


/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/


const getOddNumbers = function (numbers = []){

  let arrayOfOddNumbers = []
 
  for (let i = 0 ; i < numbers.length; i++) {
    const numberOfArray = numbers[i]
    const isOddnumber = numberOfArray % 2 !== 0 

    if(isOddnumber){
      arrayOfOddNumbers.push(numberOfArray)
    }
  }


  return arrayOfOddNumbers
}

const newArrayOdd = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

console.log(newArrayOdd)

/*
  07

  - Forme uma frase com o array abaixo e exiba-o no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]


//----------MINHA RESOLUÇÃO--------------

// const formSentence = function (word = []) {
//   const newArray = []
 
//   for (let i =  0; i < word.length; i++){
//     let wordOfArray = word[i]()
//     newArray.push(wordOfArray)
//   }

//   return newArray.join(' ')
// }

// const sentence = formSentence(functions)

// console.log(sentence)

//--------------RESOLUÇÃO ROGER----------------------

let sentence = ''

for (let i = 0; i < functions.length; i ++){
  const string = `${functions[i]()} `

  sentence += string
}

console.log(sentence)


