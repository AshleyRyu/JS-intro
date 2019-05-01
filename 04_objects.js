// let numbers = [1, 2, 3, 4]

// // 뒤에서 조작 push, pop
// // 앞에서 조작 unshift, shift

/*
JS 데이터타입 - 원시타입(primitive gype)
Boolean(true, false), null, undefined, number, string

*/

let seulgi = {
    name: 'seulgi',
    age: 5,
    number: '010-2222-2222'
}
console.log(seulgi.name)
console.log(seulgi.age)
console.log(typeof seulgi) // object
console.log(typeof [1, 2, 3]) // object


// ES6+
let name = 'Jiwon'
let stuffs = ['커피', '초콜릿']
let Jiwon = {
    // name: name,
    // stuffs: status
    name,
    stuffs
} // 변수가 이미 존재하면, 변수 자체를 넣어버리면 된다.
let jsonData = JSON.stringify(Jiwon)
let jsonParse = JSON.pasrse(jsonData7)
// 파이썬-리슽. JSON-스트링을 던지면 내가 알아서 자기가 맞는 리스트, 딕셔너리 구조화 하라고 던져줌
// 제이슨이라고 하면 "{"name":"Jiwon","stuffs":["커피","초콜릿"]}" 쓴 문자열을 일컫는다.
