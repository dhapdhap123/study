/*

● 함수 : 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능.

*/

// 선언 방법 1
function hello1(name) {
  console.log(`hello ${name}`);
}

// 선언 방법 2
const hello2 = (name) => {
  console.log("hello" + name);
};

// arrow function vs. function. 사용 용도가 조금 다름. arrow는 주로 함수를 파라미터로 전달할 때 유용
// 일반 함수는 자신이 종속된 객체를 this로 가리키고, 화살표 함수는 자신이 종속된 인스턴스를 가리킴.
function BlackDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: function () {
      console.log(this.name + ": 멍멍!");
    },
  };
}
function WhiteDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이",
    bark: () => {
      console.log(this.name + ": 멍멍!");
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark();

const whiteDog = new WhiteDog();
whiteDog.bark();
