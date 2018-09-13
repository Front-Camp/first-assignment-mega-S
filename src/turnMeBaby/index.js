/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  let splitStr = str.split("");
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join("");
  return joinStr;

};

export default turnMeBaby;
