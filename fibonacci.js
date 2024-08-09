
//using memoization
function fibonacci(n, lookup = {}) {
    if (n <= 1) {
        lookup[n] = n
        return lookup[n]
    }
    else if (lookup[n]) return lookup[n]
    else {
        lookup[n] = fibonacci(n - 2, lookup) + fibonacci(n - 1, lookup);
        return lookup[n];
    }
}

//UKO CHIBUIKE MALACHI

// const num = 10
// console.log(`fibonacci of ${num} is: `, fibonacci(num));
