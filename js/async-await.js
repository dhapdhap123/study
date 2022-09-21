/*

asnyc/await는 ES8에 해당하는 문법. Promise를 더 쉽게 사용 가능하게 함.
● 사용법
 - 함수 앞에 'async' 키워드 붙임.
 - Promise 앞에 'await' 키워드 붙임.

*/

// 예시
function sleep1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function process1() {
    console.log('안녕하세요!');
    await sleep1(1000); // 1초쉬고
    console.log('반갑습니다!');
}
  
process1();

/* 함수에서 async 사용하면, 해당 함수는 결과값으로 Promise 반환.
이렇게도 작성가능

process();
▼
process().then(() => {
    console.log('작업이 끝났어요!')
})

*/

// async 함수에서 에러를 발생 시킬때는 'throw' 사용하고,
// 에러를 잡아낼 때는 try/catch 문을 사용

function sleep2(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function makeError() {
    await sleep2(1000);
    const error = new Error();
    throw error;
}

async function process2() {
try {
    await makeError();
} catch (e) {
    console.error(e);
}
}

process2();

// 아래와 같이 함수 여러개를 동시에 작업하고 싶으면, Promise.all 사용
// 만약 등록한 프로미스 중 하나라도 실패하면, 모든게 실패 한 것으로 간주
function sleep3(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep3(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep3(500);
    return '토끼';
};
const getTurtle = async () => {
    await sleep3(3000);
    return '거북이';
};

async function process3() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
}

process3();

// Promise.race는 Promise.all과 달리, 여러개의 프로미스를 등록해서
// 실행했을 때 가장 빨리 끝난 것 하나만의 결과값을 가져옴.

/*

아랫부분 아래와 같이 변경 가능

async function process() {
  const first = await Promise.race([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(first);
}

process();

*/