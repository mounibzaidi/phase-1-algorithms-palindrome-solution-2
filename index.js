function isPalindrome(word) {
  // Iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // Calculate the corresponding index from the end of the string
    const endIndex = word.length - 1 - startIndex;

    // Compare the letter we're iterating over to the corresponding letter at the end of the string
    if (word[startIndex] !== word[endIndex]) {
      // If the letters don't match, return false
      return false;
    }
  }

  // If we reach the middle, and all the letters match, return true
  return true;
}

// Test Cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
