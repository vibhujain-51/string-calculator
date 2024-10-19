// Test Case 2:
// Input: "1"
// Output: 1

// Test Case 3:
// Input: "1,5"
// Output: 6

// Test Case 4:
// Input: "        1,               5      "
// Output: 6

function add(dataString) {
  if (!!dataString) {
    // This block will be executed if dataString is not empty

    if (dataString.length === 1) {
      return parseInt(dataString);
    } else {
      const newDataString = dataString.split(",").join("").split(" ").join("");
      return parseInt(newDataString[0]) + parseInt(newDataString[1]);
    }
  }

  return 0;
}

console.log(add("1,5"));
