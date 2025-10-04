const reverseString = (word) => {
    let reversedWord = "";
    let length = word.length;
    for (i=word.length; i >= 0; i--) {
        reversedWord += word.charAt(i);
    }
    return reversedWord;
};

/* const reverseString = (word) => (
    word
    .split("")
    .reverse()
    .join("")
)
 */
// Do not edit below this line
module.exports = reverseString;
