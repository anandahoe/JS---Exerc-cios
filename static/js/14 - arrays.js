// Arrays: https://javascript.info/array#tasks


// Is array copied?
// What is this code going to show?
// let fruits = ["Apples", "Pear", "Orange"];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// // what's in fruits?
// alert( fruits.length ); // ?


// Array operations.
// Let’s try 5 array operations.
// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll



// Calling in an array context
// What is the result? Why?
// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// });
// arr[2](); // ?


// Sum input numbers
// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.
// Run the demo



// A maximal subarray
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.
// For instance:
// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
// getMaxSubSum([-1, -2, -3]) = 0
// Please try to think of a fast solution: O(n2) or even O(n) if you can.
// Open a sandbox with tests.