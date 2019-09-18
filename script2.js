//Beginner Series #3 Sum of Numbers
//Given two integers a and b, which can be positive or negative, 
//find the sum of all the numbers between including them too and 
//return it. If the two numbers are equal return a or b.
function getSum( a,b ) {
    let sum = 0;
    if (a < b) {
      for (a; a <= b; a++) {
      sum += a;
      }
    } else if (b < a) {
      for (b; b <= a; b++) {
      sum += b;
     }
    } else if (a === b) {
      console.log(a);
      }
      console.log(sum); 
  }
  getSum(1,9);