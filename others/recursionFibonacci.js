// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.

// Find the nth number of the Fibonacci sequence

function fibonacci(n) {
  // Base case
  if (n < 2) {
    return 1;
  } else {
    // Recursive case
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

console.log(fibonacci(8));
