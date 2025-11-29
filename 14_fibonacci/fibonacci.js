const fibonacci = function(number) {
let fArray=[1];
if (number<0 || typeof parseInt(number) != "number") {return "OOPS"}
    for (i=0; i<number; i++) {
        fArray.push((fArray[i-1] || 0) + fArray[i])
    }
return fArray[number-1] || 0
};

// Do not edit below this line
module.exports = fibonacci;
