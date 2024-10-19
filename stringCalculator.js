// Test Case 1:
// Input: ""
// Output: 0

// Test Case 2:
// Input: "1"
// Output: 1

// Test Case 3:
// Input: "1,5"
// Output: 6

// Test Case 4:
// Input: "        1,               5      "
// Output: 6

// Test Case 5:
// Input: "1, 5, 4, 7, 2, 6, 9"
// Output: 34

// Test Case 6:
// Input: "1, 5, 4, 7, 2, 6, 9   "
// Output: 34

// Test Case 7:
// Input: "100 , 5, 4, 7, 2, 6, 9   "
// Output: 34

function add(dataString) {
  if (!!dataString) {
    // This block will be executed if dataString is not empty

    let sum = 0;

    // 1. Sanitize the string of unnecessary white spaces
    const cleanedStringArray = sanitizeString(dataString);

    // 2. Perform the addition

    if (cleanedStringArray.length === 1) {
      return parseInt(cleanedStringArray[0]);
    }

    cleanedStringArray.forEach((str) => {
      sum += parseInt(str);
    });

    return sum;
  }

  return 0;
}

function sanitizeString(data) {
  const cleanedString = data.split(",").map((str) => {
    if (!!str) {
      return str.split(" ").join("").trim();
    }
  });

  return cleanedString;
}

console.log(add("100 , 5, 4, 7, 2, 6, 9   "));
