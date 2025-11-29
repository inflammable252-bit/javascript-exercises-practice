palindromes = function (input) {
inputArray = input.toLowerCase().split("");
filterItems = ["!", ".", ",", " "]

function applyFilter(array) {
    for (const fItem of filterItems) {
    for (i=0; i<array.length; i++) {
            if (array[i] == fItem) {
                inputArray.splice(i, 1);
                i++;
            }
        }
    }
    return array
}
console.log(applyFilter(inputArray))
    function compare(array) {
    let leftIndex=0;
    let rightIndex=array.length-1;

    while (leftIndex<array.length && rightIndex>=0) {
        if (array[leftIndex] !== array[rightIndex]) {
        // console.log(`${array[leftIndex]} and ${array[rightIndex]}`)
        return false
        }
        else {
            leftIndex++
            rightIndex--
        }
        }
    return true
    }
return compare(inputArray)
}
// Do not edit below this line
module.exports = palindromes;
