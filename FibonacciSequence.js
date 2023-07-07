// create an algorithm to provide the fibonacci sequence of n values
// n will not be less than 2

function fibonacci(n) {
    const arr = [0,1]

    for(let i = 1; i < n-1; i++) {
        arr.push(arr[i-1]+arr[i])
    }

    return arr;
}

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]