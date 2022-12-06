// Sorting numbers is not that simple.If we use the sort() 
//to sort  an array of  numbers array, we will see an unexpected result

const lost_numbers = [4, 8, 15, 16, 23, 42];
console.log(lost_numbers.sort()); //   [15, 16, 23, 4, 42, 8]



//the solution is the compare function:-

// ascending sorting order

// we can use this function with  sort() with these conditions: -
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.

console.log(lost_numbers.sort(function (a, b) { return a - b }));//   [4, 8, 10, 16, 23, 42]


// descending sorting order

// we can use this function with  sort() with these conditions: -
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, nothing changes.

console.log(lost_numbers.sort(function (a, b) { return b - a }));//   [42, 23, 16, 10, 8, 4]



