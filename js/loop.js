/*

● for-loop : 특정 숫자를 갖고 숫자의 값을 비교, 증감해주면서 반복
● while-loop : 조건을 확인만 하면서 반복. 조건문 내부에서 변화를 직접 줘야함.

*/

// for문
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while문
let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

// for ... of : 배열에 관한 반복문. 그러나 보통은 배열의 내장함수 사용
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers){
    console.log(number);
}

/* 객체 정보를 배열 형태로 받는 함수
Object.entries() : [[키, 값], [키, 값]] 형태의 배열로 변환
Object.keys() : [키, 키, 키] 형태의 배열로 변환
Object.values() : [값, 값, 값] 형태의 배열로 변환
*/
const university = {
    SNU: '서울대학교',
    KU: '고려대학교',
    YU: '연세대학교'
};
console.log(Object.entries(university));
console.log(Object.keys(university));
console.log(Object.values(university));

// for ... in : 객체가 지니고 있는 값에 대해 반복
for (let univ in university) {
    console.log(univ);
}

// break : 반복문에서 벗어남
// continue : 그 다음 루프를 돌게끔 함
for (let univ in university) {
    if (univ !== 'KU') continue; // console.log 실행 안하고 바로 다음 루프
    console.log(`최고의 대학! ${univ}!`)
    if (univ === 'KU') break; // 반복문 종료
}