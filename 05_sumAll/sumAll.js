

const sumAll = function(from, to) {
    let sum = 0;
    let max = Math.max(from, to);
    let min = Math.min(from, to);
   
    if ((typeof from === 'string') || (typeof to === 'string')) {
        return 'ERROR';
    } else if ((typeof from === 'object') || (typeof to === 'object')) {
        return 'ERROR';
    } else if (min >= 0 && max >= 0) {
        for (let i = min; i <= max; i++) {
            sum = sum + i;
    }
} else return 'ERROR'
return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
