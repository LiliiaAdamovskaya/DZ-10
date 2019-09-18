function basicOp(operation, value1, value2)
{
  if (operation === "+") {
  console.log(value1 + value2);
  } else if (operation === "-") {
  console.log(value1 - value2);
  }
  else if (operation === "*") {
  console.log(value1 * value2);
  }
  else if (operation === "/") {
  console.log(value1 / value2);
  }
}
basicOp("/", 5, 2);