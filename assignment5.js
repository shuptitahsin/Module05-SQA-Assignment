// Celsius to Fahrenheit
function celsiusTofahrenheit (celsius){
    let fahrenheit = (celsius * 9 / 5) +32 ;
    return fahrenheit;
}
let celsius = 32;
let result1 = celsiusTofahrenheit(32);
console.log("Celsius: ",celsius);
console.log("Fahrenheit: ",result1);

//Factorial number
function factorial(number){
    let result = 1;
    for(let i = 1 ; i <= number; i++){
        result = result * i;
    }
    return result;
}
let number = 6;
let answer = factorial(number);
console.log("Number: ",number);
console.log("Factorial: ", answer);

//palindrom
function isPalindrome(word){
    let reverse = "";
    for(let i = word.length-1 ; i >=0 ; i--){
        reverse = reverse + word[i]
    }
    return word == reverse;
}
let word  = "Refer";
let result2 = isPalindrome(word);
console.log("Word: ",word);
console.log("Is palindreome: ",result2);


// Sum of array
function sumOfarray(numbers){
    let sum = 0 ;
    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
let numbers = [10, 20, 30, 40, 50];
let result = sumOfarray(numbers);
console.log("Array: ",numbers);
console.log("Sum of Array: ",result);


// FixxBuzz

for (let i = 1 ; i <=15; i++){
    if(i % 3 == 0 && i % 5 == 0 ){
        console.log("Fizz Buzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

