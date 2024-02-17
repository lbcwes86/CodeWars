// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// MY SOLUTION

function arrayPlusArray(arr1, arr2) {
    let newArr = arr1.concat(arr2) 
   return newArr.reduce((arr1,arr2) => arr1 + arr2, 0)
  }
  
  // NOTES
  //  1. use concat method to combine arrays
  //  2. use reduce method to add array values together