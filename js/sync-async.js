/*

JS는 동기식 언어! 하나의 스레드를 따라 동작이 일어남.

● 동기(Synchronous) :
- aaa
     bbb
        cc
          ddd
- 작업들을 순서대로 처리. 흐름 끊김.

● 비동기(Asynchronous) :
- aaaaaa
  bbb
  cc
  dddd
- 작업들을 동시에 처리. 흐름 끊기지 않음.

*/

// 예시 코드
function work1() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  
  work1();
  console.log('다음 작업');
// 동기로 진행됨.
// 출력 : 738ms => 다음 작업

console.log('\n----▲동기----▼비동기----\n')

// setTimeout으로 비동기로 진행가능
function work2() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0);
}

console.log('작업 시작!');
work2();
console.log('다음 작업');

// ---------------------------------------

console.log('\n----▲콜백X----▼콜백O----\n')

// 콜백함수(다른 함수에 매개변수로 넘겨준 함수. 때가 되면 나중에 호출)
// 사용해 특정 작업이 끝나고 함수 호출 가능.
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    callback();
  }, 0);
}

console.log('작업 시작!');
work(() => {
  console.log('작업이 끝났어요!')
});
console.log('다음 작업');

/*
주로 비동기적 처리되는 작업들.
▶ Ajax Web API 요청 :  요청 후 서버에서 응답을 대기해야 함.
▶ 파일 읽기 : 주로 서버 쪽 파일읽기는 비동기.
▶ 암호화/복호화 : 시간이 어느정도 걸리는 경우가 있기 때문.
▶ 작업 예약 : 단순히 어떤 작업을 몇 초 후에 스케쥴링 하는 경우.
              setTimeout을 사용해 비동기적 처리.
*/