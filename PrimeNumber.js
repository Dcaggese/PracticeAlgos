// given an integer n, determine if the number is prime or not
// return a boolean

function isPrime(n) {

    if(n == 2 || n == 3){
        return true
    } else if(n < 2 || n % 2 == 0 || n % 3 == 0) {
        return false
    }

    return true
}

console.log(isPrime(2)) //returns true
console.log(isPrime(3)) //returns true
console.log(isPrime(5)) //returns true
console.log(isPrime(97)) //returns true
console.log(isPrime(11)) //returns true
console.log(isPrime(4)) //returns false
console.log(isPrime(1)) //returns false
console.log(isPrime(120)) //returns false