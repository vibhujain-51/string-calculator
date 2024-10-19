// Test Case 1:
// Input: Empty String, null string or undefined string
// Output: 0

function add(dataString) {
  if (!!dataString) {
    // This block will be executed if dataString is not empty

    return "sum of string";
  }

  return 0;
}

console.log(add(""));
