/*
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order 
while leaving the even numbers at their original positions.

Examples:
  [7, 1]  =>  [1, 7]
  [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/


// Solution

function sortArray(array) {
  let oddList = array.filter( num => num%2 ).sort( (a,b) => b-a );

  return array.map( num => {
    return num%2 ? oddList.pop() : num;
  });
}

// or

function sortArray(array) {
  let oddNumbers = [];
  if (array === []) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      oddNumbers.push(array[i]);
    }
  }
  
  let finalArray = oddNumbers.sort((a, b) => a-b);

  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0) {
      finalArray.splice(j, 0, array[j]);
    }
  }
  return finalArray;
}