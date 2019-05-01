// 배열을 받아서 다 더해주는 함수를 작성해주세요.
// numberAddEach(numbers)
const numberAddEach = numbers => {
    let result=0
    for (let number of numbers) {
        result += number        
    }
    return result
}
console.log(numberAddEach([1,2,3,4,5,6,7,8,9,10]))

const numberSubEach = numbers => {
    let result=0
    for (let number of numbers) {
        result -= number        
    }
    return result
}
console.log(numberSubEach([5,1]))

const numberMulEach = numbers => {
    let result=1
    for (let number of numbers) {
        result *= number        
    }
    return result
}
console.log(numberMulEach([1,2,9,10]))

console.log('----------------------')
// 함수의 인자에 함수가 들어간다.(콜백) 눈여겨볼것!!
const numberEach = (numbers, calc) => {
    let result
    for (const number of numbers) {
        result = calc(number, result)
    }
    return result
}


const addEach = (number, result=0) => result + number
const subEach = (number, result=0) => result - number
const mulEach = (number, result=1) => result * number
// 콜백
// ----------------------------------------------------------------------------------------

console.log(numberEach([10,20,30], addEach))
console.log(numberEach([10,20,30], subEach))
console.log(numberEach([10,20,30], mulEach))
// 익명함수 + 콜백

// console.log(numberEach([10,20,30], addEach))와 같은 함수
console.log(numberEach([10,20,30], (number, result=0) => result+number))
console.log(numberEach([10,20,30], function(number,result=0) {
    return result + number
}))