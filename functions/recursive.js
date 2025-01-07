
function countdown(number) {
    if (number < 1) return;
    setTimeout(() => {
        console.log(number)
        countdown(number -1)
    }, 100)
};
countdown(5)

function sum(number, result = 0) {
    if (number <= 1) return result;
    return sum(number -1, result + number)
}

console.log(sum(3), "\n")