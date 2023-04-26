let string;
let num;

const repeatString = function(string, num) {
    let finalString = '';
    while (num > 0) {
        finalString = finalString + string;
        num--;
    }
    
    if (num < 0) {
        return 'ERROR';
    } else {
        return finalString;

    }

};

repeatString('carlo', 5);

// Do not edit below this line
module.exports = repeatString;
