const removeFromArray = (arr, ...param) => {
 const newArray = [];
 arr.forEach(item => {
    if (!param.includes(item)) {
        newArray.push(item)
    }
 })
 return newArray;  
}

// return arr.filter(val => !param.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
