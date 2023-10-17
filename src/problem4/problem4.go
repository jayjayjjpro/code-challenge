package main

import (
	"fmt"
)

// Using a Loop
// Time Complexity: O(n) - The loop runs n times.
// Space Complexity: O(1) - Using a fixed amount of space.
func sum_to_n_a(n int) int {
	sum := 0
	for i := 1; i <= n; i++ {
		sum += i
	}
	return sum
}

// Using the arithmetic progression formula
// Time Complexity: O(1) - Constant time operation.
// Space Complexity: O(1) - Using a fixed amount of space.
func sum_to_n_b(n int) int {
	return n * (n + 1) / 2
}

// Using Recursion
// Time Complexity: O(n) - Function calls itself recursively n times.
// Space Complexity: O(n) - Due to recursive calls, every call adds a new layer to the stack.
func sum_to_n_c(n int) int {
	if n == 1 {
		return 1
	}
	return n + sum_to_n_c(n-1)
}

func main() {
	n := 5
	fmt.Println("Using Loop:", sum_to_n_a(n))
	fmt.Println("Using Arithmetic Progression Formula:", sum_to_n_b(n))
	fmt.Println("Using Recursion:", sum_to_n_c(n))
}

// In terms of efficiency, the arithmetic progression formula is the best option
// sas it calculates the sum in constant time.
