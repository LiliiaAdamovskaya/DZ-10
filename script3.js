//Introduction
//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

//Task :
//Given a year, return the century it is in.
function century(year) {
    if (year % 100 === 0) {
          let a = year / 100;
          console.log(a);
      } else {
          let b = Math.floor(year / 100) + 1;
          console.log(b);
      }
  }
  century(2001);