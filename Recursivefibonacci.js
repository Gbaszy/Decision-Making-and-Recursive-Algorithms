function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        //Using Fibonacci Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55
