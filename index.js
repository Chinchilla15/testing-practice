
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function reverse(string){
    return string.split("").reverse().join("")
}

const calculator = {
    add: function(a,b){
        return a + b
    },
    substract: function(a,b){
    return a - b 
    },
    divide: function (a,b){
        return a / b
    },
    multiply: function (a,b){
        return a * b
    }
}

function cipher(string, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return string.split('').map((letter) => {
        if (alphabet.includes(letter)) {
          const index = alphabet.indexOf(letter);
          return alphabet[(index + key) % 26];
        }
        return letter;
      }).join('');
}

function analyzeArray(array){

    let sum = 0
    let min = array[0]
    let max = array[0]

    for(let i = 0; i < array.length; i++){

        sum += array[i]

        if(array[i] < min){
            min = array[i]
        }

        if(array[i] > max){
            max = array[i]
        }
    }
    const average = sum / array.length

    const object = {
        average: average ,
        min: min,
        max: max,
        length: array.length
    }
    return object
}

module.exports = {
    capitalize,
    reverse,
    calculator,
    cipher,
    analyzeArray
}