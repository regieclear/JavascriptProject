function add(num1, num2) {
    return num1 + num2
}

function power(num1, num2) {
    return Math.pow(num1, num2)
}

let result = add(6,6)
console.log(result)

let result2 = power(2,4)
console.log(result2)

let add = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let square = (num) => num * num;
let welcome = () => "Welcome to JS";
let greeting = (name) => "Hello " + name;
export let power = (num1, num2) => Math.pow(num1, num2);


// Function call


console.log(welcome())
console.log(add(6,5))
console.log(sub(6,5))