
const numbers = new Set([1, 4, 22, 98, 222, 5, 1, 2, 1, 3])

numbers.add(2100)
numbers.delete(5)
console.log(numbers)
console.log(numbers.has(4))
// numbers.clear()
console.log(numbers)
console.log(numbers.size)
console.log(numbers.values())
for (const number of numbers.values()){
    console.log(number)
}