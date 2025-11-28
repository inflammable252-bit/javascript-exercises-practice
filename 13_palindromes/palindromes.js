palindromes = function (input) {
    inputArray = input.toLowerCase().split("");
    filterItems = ["!", ".", ",", " "]

    function applyFilter(array) {
        for (const fItem of filterItems) {
            for (i = 0; i < array.length; i++) {
                if (array[i] == fItem) {
                    inputArray.splice(i, 1);
                    i++;
                }
            }
        }
        return array
    }
    console.log(applyFilter(inputArray))
    length = inputArray.length;

    let firstHalf = [];
    for (i = 1; i <= length / 2; i++) {
        firstHalf.push(inputArray[i - 1])
    }
    let secondHalf = [];
    for (i = inputArray.length; i > length / 2; i--) {
        secondHalf.push(inputArray[i - 1])
    }
    if (length % 2 != 0) {
        secondHalf.pop()
    }

    for (i = 0; i < (firstHalf.length - 1); i++) {
        if (firstHalf[i] != secondHalf[i]) {
            return false + " / " + firstHalf + " / " + secondHalf;
        }
        else return true + " / " + firstHalf + " / " + secondHalf;
    }
}

// Do not edit below this line
module.exports = palindromes;
