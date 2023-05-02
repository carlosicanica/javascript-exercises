

const sumAll = function(from, to) {
    let sum = 0;
    let max = Math.max(from, to);
    let min = Math.min(from, to);
    for (let i = min; min <= max; i++) {
        sum = sum + i;
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
