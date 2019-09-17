//Beginner Series #3 Sum of Numbers
//Given two integers a and b, which can be positive or negative, 
//find the sum of all the numbers between including them too and 
//return it. If the two numbers are equal return a or b.
function GetSum( a,b ) {
    if (a < b){
      let sum = 0;
      for (a, a <= b, a++) {
      sum += a;
      }
    } else if (a > b) {
      for (b, a >= b, b++) {
      sum += b;
     }
    } else if (a === b) {
      return a;
      }
      return sum;
  }
  GetSum(1,5);