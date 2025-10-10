const sumAll = (x, y) => {
    const input = [x, y];
    for (const number of input) {
        if (isNaN(number) || !Number.isInteger(number) || number < 0) {
            return ("ERROR")
        }
    }
    {
        let array = input.sort((a, b) => a - b);
        function spread(arr) {
            const arrDiff = (arr[1] - arr[0])
            let newArr = [];
            i = 0;
            while (newArr.length <= arrDiff) {
                i++;
                newArr.push((array[0] + i) - 1)
            }
            return newArr
        }
        return spread(array).reduce((total, curr) => total + curr)
    }
}

// Do not edit below this line
module.exports = sumAll;
