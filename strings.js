// ascending sorting order
let languages = ['javascript', 'php', 'rust', 'C#'];
let sorted_languages1 = languages.sort();
console.log(sorted_languages1); //['C#', 'javascript', 'php', 'rust'] 

// the array and  the sorted array has the same references.

console.log(languages == sorted_languages) // true


// descending sorting order

// First method using sort() method but with a compare function

let sorted_languages2 = languages.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log(sorted_languages2);//   ['rust', 'php', 'javascript', 'C#']

// Second method using reverse() method
console.log(languages.reverse()); //   ['C#', 'rust', 'php', 'javascript']


// As you can see reverse() just reverse the order of  the elements not sorting them, 
//if want to sort an array with it, you have to use sort()  
//first then reverse the order of the sorted array.

let sorted_languages3 = languages.sort(); // Ascending
let reversed_languages = sorted_languages3.reverse(); // Descending 
console.log(reversed_languages); // [ 'rust', 'php', 'javascript', 'C#' ]
