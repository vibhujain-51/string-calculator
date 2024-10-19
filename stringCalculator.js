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

// Test Case 8:
// Input: "//;\n1;2"
// Output: 6

// Test Case 9:
// Input: "3,-10,5,-8,5"
// Output: Negatives not allowed: -10, -8

function add(dataString) {
  if (!!dataString) {
    // This block will be executed if dataString is not empty

    let sum = 0;

    // 1. Sanitize the string of unnecessary white spaces
    const cleanedStringArray = sanitizeString(dataString);

    // 2. Check if string contains negative numbers
    handleCheckIfStringContainsNegativeNumber(cleanedStringArray);

    // 3. Perform the addition

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
  let localData = data;
  const delimiter = handleFindDelimiter(data);

  localData = handleRemoveDelimiterStart(localData);

  const stringArrayWithoutWhiteSpaces = localData
    .split(delimiter)
    .reduce((arr, str) => {
      if (!!str) {
        arr.push(handleRemoveWhiteSpaces(str));
      }
      return arr;
    }, []);

  stringArrayWithoutWhiteSpaces.map((withoutSpaceStr) => {
    if (withoutSpaceStr.includes("\n")) {
      withoutSpaceStr.split("\n").forEach((item) => {
        if (!!item) finalStringOfNumbers.push(handleRemoveWhiteSpaces(item));
      });
    } else {
      finalStringOfNumbers.push(withoutSpaceStr);
    }
  });

  return finalStringOfNumbers;
}

function handleRemoveWhiteSpaces(dataStr) {
  return dataStr.split(" ").join("");
}

function handleFindDelimiter(dataStr) {
  let customDelimiter = "";

  if (dataStr.includes("//")) {
    customDelimiter = dataStr.split("\n")[0].split("//").join("").trim();
  }

  return !!customDelimiter ? customDelimiter : ",";
}

function handleRemoveDelimiterStart(dataStr) {
  return dataStr.split("//").join("").trim();
}

function handleCheckIfStringContainsNegativeNumber(numbersArr) {
  const negativeNumbers = numbersArr.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
  }
}

console.log(add("3,2,8,10"));
