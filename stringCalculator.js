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

// Test Case 8:
// Input: "1\n2,3"
// Output: 6

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
  let finalStringOfNumbers = [];

  const stringArrayWithoutWhiteSpaces = data.split(",").reduce((arr, str) => {
    if (!!str) {
      arr.push(handleRemoveWhiteSpaces(str));
    }
    return arr;
  }, []);

  stringArrayWithoutWhiteSpaces.map((withoutSpaceString) => {
    if (withoutSpaceString.includes("\n")) {
      withoutSpaceString.split("\n").map((item) => {
        finalStringOfNumbers.push(handleRemoveWhiteSpaces(item));
      });
    } else {
      finalStringOfNumbers.push(withoutSpaceString);
    }
  });

  return finalStringOfNumbers;
}

function handleRemoveWhiteSpaces(dataStr) {
  return dataStr.split(" ").join("");
}

console.log(add("1\n2,103"));
