/*
1. let, const
2. ==, ===
2. funciton
+ arrow function
+ 익명함수

4. '*'*Infinite : 콜백함수
 
 */
// 1. 함수 선언식
function add(num1, num2){
    return num1 + num2
}
console.log(add(1, 3))

// 2. 함수 표현식
let add2 = function(num1, num2){
    return num1 + num2
}
// 어느 변수에 함수를 저장하는 방법..파이썬 람다같음
console.log(add(1, 3))

// ES6+ Arrow Function.
// 요즘 힙한 방식
// 
let sub = (num1, num2) => {
    return num1 - num2
}

// 인자가 하나인 경우, () 생략 가능
// 단순 리턴인 경우, {} 및 리턴 키워드 생략 가능
let greeting = name => `${name}, 안녕!`
console.log(greeting('지원'))
let mul = (num1, num2) => num1 * num2
console.log(mul(1, 4))

// 인자가 없는 경우에는 () 작성
let hello = () => 'hello, world!'

// object 리턴 시
// let me = (name, age) => {name, age} //리턴을 못해준다
// object 리턴 시 반드시 () 묶어서 작성
let me = (name, age) => ({name, age}) 
console.log(me('hi', 3))

let neagtive = (num) => -1*num

let gutenTag = () => 'Guten Tag'

let vietnam = (member) => {
    let member_base= '유지원'
    return `${member_base}와 ${member}가 베트남에 가요.`
}
console.log(vietnam('신혜용'))

// 만약, default args (기본인자)
let bonjour = (name='동명') => `${name}, bonjour`
// ----------------------------------------------------------------------------------------

// 4. 익명 함수
(function(num) {return num*num}) // num => num*num와 같다.
// ----------------------------------------------------------------------------------------

// 5. 즉시 실행 함수 (익명함수 + 호출)
(function(num) {return num*num})(5) // (num => num*num(5)) - IIFE (Immediately Invoked Function Expression)
// 25
let myNum = (function(num) {return num*num})(5)
myNum // 25

let foods = ['빠삐코', '메로나', '돼지바']
foods.forEach(function(icecream) {
    console.log(icecream)
})
// 빠삐코
// 메로나
// 돼지바
foods.forEach(ice => console.log(ice))
foods.forEach(function(element, idx, foods) {
   console.log(element, idx, foods)
})
// 빠삐코 0 (3) ["빠삐코", "메로나", "돼지바"]
// 메로나 1 (3) ["빠삐코", "메로나", "돼지바"]
// 돼지바 2 (3) ["빠삐코", "메로나", "돼지바"]

const numberEach = (numbers, calc) => {
    let result
    for (const number of numbers) {
        result = calc(number, result)
    }
    return result
}