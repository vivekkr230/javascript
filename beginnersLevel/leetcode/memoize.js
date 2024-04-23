// Example of memoized Fibonacci function
function fibonacciMemo() {
    let memo = {}; // Closure to store memoized results
    return function memoizedFibonacci(n) {
        if (n in memo) {
            return memo[n];
        }
        if (n <= 1) {
            return n;
        } else {
            memo[n] = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
            return memo[n];
        }
    }
}

// Usage
const memoizedFibonacci = fibonacciMemo();
console.log(memoizedFibonacci(10)); // With memoiz