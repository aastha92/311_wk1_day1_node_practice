const split = (str, delim) => {
  // write code for strings.split
  var result = str.split(delim);
  return result;
}

const pairs = (str) => {
  // write code for strings.pairs
  var result = str.match(/.{1,2}/g);
  return result;
}

const reverse = (str) => {
  // write code for strings.reverse

  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); 
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); 
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); 
  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray; 
}




module.exports = {
  split,
  pairs,
  reverse
}