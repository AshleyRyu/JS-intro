// const firstName = 'Ashley'
// const lastName = 'Ryu'
// const name = firstName + lastName
// document.write('<h1>' + name + '</h1>')

// // ES6+ : Template literal(템플릿 문자열)
// // 주의! ' 가 아니라 ` 이다! 1 옆에 친구!!
// document.write(`<h1>${name}</h1>`)

let userName = prompt('너 누구니?')
let message = `<h1>${userName}</h1>`

// JS에서는 ===이 비교 연산자이다.
// === : 일치함을 비교(값, 타입)
// == : 동등함을 비교(값) : 타입이 암묵적 변환
// 123 == '123' : True
if (userName === 'Ashley Ryu') {
    message = `<h1>${userName}는 일하자</h1>`
}
else if (userName === 'David'){
    message = `<h1>${userName}는 쉬고있어</h1>`
}
else{
    message = `<h1>${userName}는 도망쳐</h1>`
}
document.write(message)