// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// SOLUTION

let countSheep = function (num){
    let str = ''
    for(let i = 1; i <= num; i++){
      str+= `${i} sheep...` 
    }
    return str
  }


// short explantion...

// let countSheep = function (num){
//     // assigning str variable to empy
//       let str = ''
//     //   loop starts @ 1 and loops throught until equal to num argument
//       for(let i = 1; i <= num; i++){
//     //     str equalls str + template literal
//         str+= `${i} sheep...` 
//       }
//     //   return str variable string
//       return str
//     }