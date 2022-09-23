/*

코드가 짧다고 좋은 것은 아님! 짧으면서 읽었을 때 어떤 역할을 하는지 잘 이해가 될 수 있어야 좋은 코드.

● 삼항 연산자
● Truthy and Falsy
● 단축 평가 논리 계산법(&&, ||)
● 함수의 기본 파라미터
● 조건문 더 스마트하게 쓰기
● 비구조화 할당 (구조분해) 문법
● spread, rest

*/

// ● 삼항 연산자: '조건 ? true일때 : false일때'
// 중첩 가능, 그러나 가독성이 좋지 않아 if문으로 처리하는게 나음
const condition1 = false;
const condition2 = false;

const value1 = condition1
  ? '와우!'
  : condition2
    ? 'blabla'
    : 'foo';

// ● Falsy and Truthy : Truthy는 Falsy 외의 값들
// Falsy한 값들 : !붙이면 true가 되는 값들 (빈 array나 object는 x)
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN); // parseInt 사용시 등장. 숫자가 아닌 것
// 응용
const v = { a: 1 };
const truthy = !!v; // 만약 v의 값이 Falsy였다면 false, Truthy라면 true가 됨
console.log(truthy);

// ● 단축 평가 논리 계산법 : operator 특성을 이용해 &&, || 연산자로 코드 단축
// a && b : b가 truthy. a가 falsy하면 결괏값 a. a가 truthy하면 결괏값 b.
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

// a || b : b가 truthy. a가 falsy하면 결괏값 b. a가 truthy하면 결괏값 a.
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {  // falsy하면 !falsy는 truthy.
    return '이름이 없는 동물입니다';
  }
  return name; // || 연산자 사용하면 if문 삭제, return name || '이름이 없는 동물입니다'로 축약 가능.
}

const animalName = getName(namelessDog);
console.log(animalName); // 이름이 없는 동물입니다.

// ● 함수의 기본 파라미터 : ES6문법
// 기존엔 parameter가 없을 때 ||연산 이용해 대체 값 지정해줬음.
function calculateCircleArea(r = 1) { // 기본 파라미터 지정
  return Math.PI * r * r;
}
// ▲ 화살표 함수로도 사용 가능
// const calculateCircleArea = (r = 1) => Math.PI * r * r;
const area = calculateCircleArea();
console.log(area); // 3.141592653589793

// ● 조건문 더 스마트하게 쓰기
// 1. 특정 값이 여러 값 중 하나인지 확인해야 할 때
function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

// 배열을 만들고 includes 함수 사용
function isAnimal2(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(name);
}
// 아래처럼 화살표 함수로 작성도 가능
const isAnimal3 = name => ['고양이', '개', '거북이', '너구리'].includes(name);


// 2. 값에 따라 다른 결과물을 반환 해야 할 때
function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구

// switch 활용 가능
function getSound2(animal) {
  switch (animal) {
    case '개':
      return '멍멍!';
    case '고양이':
      return '야옹~';
    case '참새':
      return '짹짹';
    case '비둘기':
      return '구구 구 구';
    default:
      return '...?';
  }
}

// ||연산자 이용
function getSound3(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}

// 3. 값에 따라 다른 코드 구문을 실행해야 할 때 : 객체에 함수를 넣으면 됨.
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('고양이');
    },
    비둘기() {
      console.log('구구 구 구');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

// ● 비구조화 할당 (구조분해) 문법
// 1. 비구조화 할당시 기본값 설정
const object = { a: 1 };

function print({ a, b = 2 }) { // b가 object에 없기 때문에 원래는 undefined
  console.log(a, b);
}

print(object); // 1 2

// 함수의 파라미터에서만 가능한 건 X.
const { a, b = 2 } = object;
console.log(a, b); // 1 2

// 2. 비구조화 할당시 이름 바꾸기
// 
const animal = {
  name: '멍멍이',
  type: '개'
};

const nickname = animal.name; // 이름이 서로 다를 때.
// => const {name : nickname } = animal
console.log(nickname); // 멍멍이

// 3. 배열 비구조화 할당
const array = [1, 2];
const [one, two] = array;
console.log(one, two); // 1 2

// 이 역시 기본값 지정 가능
const array2 = [1];
const [원, 투 = 2] = array2;
console.log(원, 투); // 1 2

// 4. 깊은 값 비구조화 할당
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};
// name, languages, value의 값을 꺼내 상수로 지정하고 싶을 때
// 두 번에 걸쳐 할당
const { name, languages } = deepObject.state.information;
const { value } = deepObject;
const extracted = {
  name,      // name = name,
  languages, // languages = languages,
  value      // value = value         와 같음.(key 이름으로 선언된 값이 존재한다면, 바로 매칭시켜주는 문법 - ES6 object-shorthand문법)
};
console.log(extracted);

// 한번에 할당
// const {
//     state: {
//         information: {name, languages}
//     },
//     value
// } = deepObject;

// ● spread, rest - ES6 문법
// 1. spread : 객체나 배열을 펼칠 수 있음. 기존의 것을 건드리지 않고 새로운 객체 생성 가능.
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  name: '슬라임',  // === '...slime'
  attribute: 'cute'
};

const purpleCuteSlime = {
  name: '슬라임',     // 
  attribute: 'cute',  // '...cuteSlime'
  color: 'purple'
};

// 여러번 사용도 가능
const numbers = [1, 2, 3]
const spreadNumbers = [...numbers, 1000, ...numbers]; // [1, 2, 3, 1000, 1, 2, 3]

// 2. rest : 객체, 배열, 파라미터에서 사용 가능
// 객체, 배열에서 사용할 때에는 비구조화 할당 문법과 함께 사용
const lizard = {
  name: '도마뱀',
  attribute: 'like snake',
  color: 'green or something'
}
const { color, ...rest } = lizard;
console.log(rest) // { name: '도마뱀', attribute: 'like snake'}

// 함수 파라미터에서의 rest : 파라미터 개수를 모를때 rest 파라미터 사용
function sum(...rest) {
  return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // [1, 2, 3, 4, 5, 6]