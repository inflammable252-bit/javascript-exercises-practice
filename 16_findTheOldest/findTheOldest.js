function findTheOldest(dataset) {
currentYear = new Date().getFullYear()

age = (item) => {return Math.abs((item.yearOfDeath || currentYear) - item.yearOfBirth);
    }

dataset.sort((a,b) => age(a) - age(b))
dataset.splice(0,dataset.length-1)

return dataset
}

// Do not edit below this line
module.exports = findTheOldest;
