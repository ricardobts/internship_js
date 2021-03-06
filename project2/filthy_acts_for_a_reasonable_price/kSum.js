/**
 * Returns the sum of two strings representing numbers, doing the addition in a kindergarden fashion
 * (digit by digit)
 * @param {*} strNum1 String 1 representing the first number 
 * @param {*} strNum2 String 2 representing the second number
 */
function kSum(strNum1, strNum2) {
  // Check if input has anything other than digits 0-9
  if (strNum1.match(/[^0-9]/g) || strNum2.match(/[^0-9]/g)) {
    return [strNum1, strNum2];
  }

  // Add zeros to the beginning of the string with smaller length to match the length of the other one
  if (strNum1.length < strNum2.length) {
    strNum1 = strNum1.padStart(strNum2.length, "0");
  } 
  if (strNum2.length < strNum1.length) {
    strNum2 = strNum2.padStart(strNum1.length, "0");
  }

  // Create arrays from both strings
  strNum1 = strNum1.split("");
  strNum2 = strNum2.split("");

  const sum = new Array(strNum1.length); // Create array with the same length as both strings
  let remainder = 0; // Remainder to keep track of the remainder if the sum of the digits is bigger than 9
  let digitSum; // Variable to sum the digits of both strings

  for (let i = (strNum1.length - 1); i >= 1; i--) { // Stops at 1, to not mess with the last digit of both strings
    // Store the sum of the digits of each string plus the remainder and turn it to string
    digitSum = String(Number(strNum1[i]) + Number(strNum2[i]) + remainder); 

    // If the digitSum is bigger than 9 (has more than one digit), assign remainder to remainder variable
    remainder = digitSum.length > 1 ? 1 : 0;
    sum[i] = digitSum[remainder]; // Add the last digit of the digitSum to the sum array
  }
  /* Store the sum of the first to digits of both strings plus the remainder
  ** in the first position of the sum array and join the array to get a string.
  ** Return the final string
  */
  sum[0] = String(Number(strNum1[0]) + Number(strNum2[0]) + remainder);
  return sum.join(''); 
}

module.exports = kSum;
