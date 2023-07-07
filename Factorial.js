// given an integer n, find the factorial of that integer

function factorial(n) {
    let product = 1

    while(n > 0) {
        product *= n
        n-- 
    }

    return product
}

console.log(factorial(0)) // returns 1
console.log(factorial(1)) // returns 1
console.log(factorial(4)) // returns 24
console.log(factorial(5)) // returns 120


