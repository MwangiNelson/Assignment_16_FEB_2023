
console.log("------------------------------------- SOLUTION 1 --------------------------------------------------")
//printing even numbers
function printEvenNumbers(range) {
    let start = range[0]
    let end = range[1]
    for (start; start < end; start++) {
        if ((start % 2) == 0) {
            console.log(`${start} is even`)
        }
    }
}
printEvenNumbers([0,10])


console.log("------------------------------------- SOLUTION 2 --------------------------------------------------")

//printing multiple tables
function getMultiple(range) {
    let start = range[0]
    let end = range[range.length - 1]

    let all_multiples_table = []

    for (start; start < end + 1; start++) {
        let table = []
        for (let i = 0; i < 11; i++) {
            table.push(`${start} * ${i} = ${start * i}`)
        }
        all_multiples_table.push(table)
    }

    return all_multiples_table
}
console.table(getMultiple([1, 10]))


console.log("------------------------------------- SOLUTION 3 --------------------------------------------------")
//length converter
let kms = 10
function Km_To_Miles_Converter(km){
    console.log(`${km} kilometers = ${km*0.621371} miles`)
}
Km_To_Miles_Converter(kms)

console.log("------------------------------------- SOLUTION 4 --------------------------------------------------")
//sum of nums in array
let array = [1,2,3,4,5,6,7,8,9,10]
function getSumArr(arr){
    let sum = arr.reduce((accumulator, currentVal) => accumulator + currentVal)
    console.log(`THE SUM OF [${arr}] = ${sum}.`)
}
getSumArr(array)