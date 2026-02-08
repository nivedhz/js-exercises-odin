const removeFromArray = function(array, ...num) {
    let removedArray = [];
    for (let x of array){
        if (!num.includes(x)){
            removedArray.push(x)
        }
    }
    return removedArray;
    }

// Do not edit below this line
module.exports = removeFromArray;
