/*

● var : 변수 선언 - 똑같은 이름으로 여러 번 선언 가능.
Hoisting : 변수의 선언과 초기화를 분리한 후,
선언만 코드의 최상단으로 옮기는 것.
- var는 호이스팅 시 undefined로 변수 초기화.
- let과 const는 undefined로 초기화는 X.
=> 문제점 : 변수 중복 선언, for문 등의 일시적 변수로서 사용에서의 문제점


● let : 변수 선언 - 한 번 선언 후 값 바꿀 수 있음.
● const : 상수 선언 - 한 번 선언하면 값 못바꿈.

*/


var a = 123;
function func() { 
    console.log(a); // undefined 
    var a = 456;  
    console.log(a); // 456
}
func();

// ▼ 호스팅을 통해 아래와 같이 인식됨.

var a = 123;
function func() {
    var a
    console.log(a); // undefined 
    a = 456;  
    console.log(a); // 456
}
func();

// null과 undefined : 둘다 '없음' 의미.
// null은 '이 값이 없다!', 고의적으로 설정하지 않은 것.
const friend = null; // null

// undefined : '아직 값이 설정되지 않았다.'
let criminal;
console.log(criminal); // undefined