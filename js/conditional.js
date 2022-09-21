/*

● if문 : 특정 조건 만족시킬 때 특정 코드 실행
  if문 안과 밖 등, 다른 블록 범위에서는 let과 const를 같은 이름으로 선언 가능
● if-else문 : ~하다면 ~하고, 그렇지 않다면 ~~해라.
● if-else if문 : 여러 조건에 따라 다른 작업 할 때 사용.
● switch/case 문 : 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용.

*/
const 조건 = true;
const 코드 = true;
const 조건1 = 1;
const 조건2 = 2;

// if문
if (조건) {
    코드;
}

// if-else문
if (조건) {
    코드;
} else {
    코드;
}

// if-else if문
if (조건1) {
    코드;
} else if (조건2) {
    코드;
} else {
    코드;
}

// switch/case 문
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default: // device 값이 case에 없는 값일 경우
    console.log('모르겠네요..');
}