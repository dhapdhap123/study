/*

● '+' : 단항 플러스, 피연산자의 부호를 반대로 바꾼 값 반환.
● '-' : 단항 부정, 피연산자가 숫자 타입이 아니면 숫자로 변환 시도
● '++' : 증가, ++x는 피연산자에 1을 더한 값 반환. x++은 1 더하기 전 값 반환
● '--' : 감소, --x는 피연산자에 1을 뺀 값 반환. x--은 1 빼기 전 값 반환
● '**' : 거듭제곱
● '/' : 몫, 10 / 5 는 2반환
● '%' : 나머지, 12 % 5는 2반환

● 연산 순서 : NOT => AND => OR
● '==' : 타입이 달라도 모양이 같거나(3 == '3'), 결이 같음(null == undefined)
● '===' : 완전히 일치.(3 === (5-2)), (null !== undefined)

*/

console.log(+false);
console.log(+'3');
console.log(-true);
let x = 1
console.log(x++, ++x)
console.log(x--, --x)

// ● && : 논리 AND 연산자
true && true // t && t는 true 반환
true && false // t && f는 false 반환
false && true // f && t는 false 반환
false && (3 ==4) // f && f는 false 반환

// => 활용 : js나 리액트에서 선제조건(t/f)에 따라 후번 피연산자 반환 가능(삼항연산처럼)
// false && 아무거나는 거짓으로 단락 평가.(왼쪽 -> 오른쪽 순서이기 때문)
'Cat' && 'Dog' // t && t는 Dog 반환
false && 'Cat' // f && t는 false 반환

// ● || : 논리 OR 연산자
true || true // t || t는 true 반환
false || true // f || t는 true 반환
true || false // t || f는 true 반환
false || (3 == 4) // f || f는 false 반환

// => 활용 : 둘 중 하나만 참이여도 실행할 때. ||의 경우에는 둘다 참이면 앞 피연산자 반환.
// true || 아무거나는 참으로 단락 평가.(왼쪽 -> 오른쪽 순서이기 때문)
'Cat' || 'Dog' // t || t는 Cat 반환
false || 'Cat' // f || t는 Cat 반환
'Cat' || false // t || f는 Cat 반환