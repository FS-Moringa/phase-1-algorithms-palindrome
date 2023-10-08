function isPalindrome(word) {
  // Write your algorithm here
  console.log(isPalindrome("madam"));  
console.log(isPalindrome("robot"));     
console.log(isPalindrome("racecar"));   
console.log(isPalindrome("hello"));     
console.log(isPalindrome("level"));     
console.log(isPalindrome("A man, a plan, a canal, Panama")); 

}

/* 
  Add your pseudocode here
*/FUNCTION isPalindrome(str)
    strLower = CONVERT_TO_LOWERCASE(str)  // Convert the string to lowercase
    reversedStr = REVERSE_STRING(strLower) // Reverse the string
    RETURN strLower EQUALS reversedStr    // Check if the original string is equal to its reverse

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
