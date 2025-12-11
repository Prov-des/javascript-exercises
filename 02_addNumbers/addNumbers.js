function addNumbers() {
  const a = 1;
  const b = 1;

  let result;

  result = a + b; // <------ EDIT THIS LINE
  //result = Number(a) + Number(b); <------ SAFE CODE
  //result = +a + +b; <------ CAN ALSO BE WRITTEN LIKE THIS (SHORTHAND)

  return result;
}

// Do not change this
module.exports = addNumbers;
