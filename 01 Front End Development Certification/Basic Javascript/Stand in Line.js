/*In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function queue which takes an array (arr) and a number (item) as arguments. Add the number to the end of the array, then remove the first element of array. The queue function should then return the element that was removed. */

function queue(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line --> Original line read "return item;", changed to "return removed;"
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(queue(testArr, 6
)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
