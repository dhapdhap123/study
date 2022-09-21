/*

● 함수 : 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능.

*/

// 선언 방법 1
function hello1(name) {
    console.log(`hello ${name}`)
}

// 선언 방법 2
const hello2 = (name) => {
    console.log('hello' + name)
}