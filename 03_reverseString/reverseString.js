let string;

const reverseString = function(string) {
    let splitWordsArray = string.split("");
    let reverseArray = splitWordsArray.reverse();
    let finalString = reverseArray.join("");
    return finalString;
    

};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
