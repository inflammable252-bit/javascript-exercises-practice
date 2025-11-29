const getTheTitles = function(array) {
titleArray = []
array.forEach((item) => {
    titleArray.push(item.title);
})
return titleArray
}

// Do not edit below this line
module.exports = getTheTitles;
