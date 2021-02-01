const prices = [12,18,30,10]

const sum = prices.reduce((sum, price) => sum + price)
console.log(sum)

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countedNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++
    } else {
        allNames[name] = 1
    }
    return allNames
}, {})
console.log(countedNames)