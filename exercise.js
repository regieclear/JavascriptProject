// let numbers = [12,54,33,10,8.43,21]


// console.log('Length of array is ' + numbers.length)
// console.log('Last number in array ' + numbers[numbers.length-1])
// console.log("All numbers are " + numbers);


// let names = ['Mike','Ronny','Julie']


// let str1 = 'Clean World Green World Happy World'


// let arr1 = str1.split('d')
// console.log(arr1)
// console.log('Total words are ' + arr1.length)

// let odd = 1
// let increment = 2

// while (odd<50) {
//     console.log(odd)
//     odd = odd + increment
// }

let num1 = 342145
let reverse = 0
// let rem = num1 % 10
// console.log(rem)

while(num1>0){
    // let rem = num1 % 10 //342145
    // num1 = parseInt(num1/10) //0

    // total = total + rem // 19
    
    let rem = num1 % 10
    num1 = parseInt(num1/10)
    reverse = (reverse * 10) + rem 
}
console.log(reverse)
// console.log('Total is ' + total)