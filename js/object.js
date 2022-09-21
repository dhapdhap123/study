/*

● 객체 : 변수나 상수 하나의 이름에 여러 종류의 값을 넣을 수 있음.

*/

// 키에 해당하는 부분은 공백 X. 공백 넣으려면 따옴표로 감쌈.
const sample = {
    'key with space': true
}

// value는 object.key로 읽어옴
const university = {
    SNU: '서울대학교',
    KU : '고려대학교',
    YU : '연세대학교'
}
const bestUniv = university.KU;

//객체 비구조화
const { SNU, KU, YU } = university;
console.log( SNU, KU, YU );

//더 나아가 파라미터 단계에서 객체 비구조화 할당 가능
function printBestUniv({ KU }) {
    const text = `최고의 대학 : ${KU}`
    console.log(text);
}
printBestUniv(university);

// 객체 안에 함수 넣기
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() { // 이름 없어도 됨.
        console.log(this.sound); // this는 자신이 속해있는 객체를 가르킴. 화살표 함수면 this 사용 불가능
    }
}
dog.say();

// 객체의 값 수정 [1]
dog.name = '야옹이'

//Getter 함수(get으로 사용), Setter 함수(set으로 사용)
//getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행
//setter 메서드는 obj.propName = value으로 프로퍼티에 값을 할당하려 할 때 실행

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() { //user.fullName 읽을 때 실행
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) { //user.fullName = ? 수정할 때 실행
      [this.name, this.surname] = value.split(" ");
    }
};
  
// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper