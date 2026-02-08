const sumAll = function(...num) {
    if (!num.every(Number.isInteger) || num.some(x => x < 0)){
        return "ERROR";
    } 
    else{
        const min = Math.min(...num);
        const max = Math.max(...num);
        const noOfIntegers = max - min + 1;
        return (noOfIntegers * (min + max)) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
