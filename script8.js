// Modify the spacify function so that it returns the given string with spaces insertedbetween each character.

// spacify("hello world") // returns "h e l l o   w o r l d"
function spacify(str) {
    let newStr = str.split("").join(" "); 
    console.log(newStr);
  }
  spacify("Hello World");