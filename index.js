function isPalindrome(word) {    
  let len = word.length;
  for (let i = 0; i < (len / 2); i++) {
      if (word.charAt(i) !== word.charAt(len - 1 - i))
           return false;
  }
  return true;
}

/* 
  Add your pseudocode here
function accepts a string (or word)
array = string or word split
if i[0] matches 1[last] return true and move on 
if statement loops until all characters are reviewed
loop exits if any return false 

  Add written explanation of your solution here
*/// function takes a string and turns it into an Array
//
// We then compare first and last elements of the array 
// until we meet in the middle (if statements)
// if any of these bounce back as not matching, we return false
//if all come back true, exit and return true

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
