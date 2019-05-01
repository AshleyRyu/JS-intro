// alert('JS, 안녕!')
// console.log('안녕?')
// console.log('빠이!')
document.write('<h1> Hi </h1>')
console.log(name)
var name = '지원'

// 변수 호이스팅
// JS에서 모든 선언과 관련된(변수, 함수 등) 문장은 호이스팅 된다.
// 변수는 1) 선언단계 2) 초기화 단계(undefined) 3) 할당 단계를 거치게 된다.

console.log(name) //undefined
var name = '지원'
// console.log(phoneNumber)

// let(변수), const(상수) 키워드 (ES6+)
// var : 재선언이 가능
var a = 3
var a = 5
console.log(a)

let b = 3
// let b = 5 에러! 재선언 불가

for (var i = 0; i < 3; i ++){
    console.log(i)
}

console.log('================')
console.log(i)

// let의 scope는 다르다
for (let j = 0; j < 3; j ++){
    console.log(j)
}

console.log('================')
console.log(j)
