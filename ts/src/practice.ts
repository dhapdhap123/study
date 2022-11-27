/*
  number, string, boolean, array, object
  tuple, any, unknown, type, void, nvever, interface, Generics
  |, ?, readonly, 함수에서의 사용, overloading
*/

// 기본 자료형 : number, string, boolean
let count: number = 0;
count += 1;
const message: string = "hello world";
const done: boolean = true;

// 배열 선언
const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

// 이 값들 중 하나
let color: "red" | "orange" | "yellow" = "red";
color = "yellow";
color = "orange";

// 함수에서의 사용

function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

// 배열 내장함수 사용 때도 parameter의 타입 유추 쉬움
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// return 값 없으면 반환 타입 void로 설정
function returnNothing(): void {
  console.log("I am just saying hello world");
}

// tuple : 최솟값 가지고 순서대로 가지는 array 지정할 때 사용
const player: [string, number, boolean] = ["LYC", 24, true];

// readonly : 변경 불가능한 immutable 속성 가지게 함.
const sports: readonly string[] = ["1", "2", "3"];
// sports.push("1"); sports[0] = "2"; 와 같이 immutable 훼손하는 method나 명령들 막아줌.

// any : typescript로부터 벗어날 수 있음.
const number: any = [1, 2, 3, 4, 5];
number + false; // 말도 안되는 것들 가능해짐

// unknown : 변수의 타입을 알지 못할 때 사용. 타입 확인 작업이 강제됨.
let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a + 1;
}

// void : 함수에서 return 없으면 void.
function hello() {
  console.log("x");
}

// never : 함수가 절대 return하지 않을 때 발생
function bye(): never {
  throw new Error("xxx");
}
function hi(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
    // 절대 실행안됨 (never)
  }
}

/*
  class : public, private 이용 가능 - js에서는 없는 기능(둘 다 this로 대체됨). ts에서 보호해주는 역할.
*/
class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const nico = new Player("nico", "las", "니코");
nico.nickname; // firstName, lastName은 불러올 수 없음(private)

// 추상 class : 다른 클래스가 상속받을 수 있는 클래스. 직접 인스턴스를 만들 수 없음.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string,
    protected callSign: string // protected: 자식 클래스에서 접근 가능한 private
  ) {}
  public getFullName() {
    // 메소드에도 private, public 적용 가능
    return `${this.firstName} ${this.lastName}`;
  }

  abstract getNickName(): void; // 추상 메소드 : 추상 클래스를 상속받는 것들이 무조건 구현을 해야하는 메소드.
}
class Human extends User {
  // User class에 추상 메소드가 있으므로 무조건 구현해야 함.
  getNickName() {
    console.log(this.callSign);
    // private argument들은 자식 class에서도 못 받아옴. ex) firstName, lastName
    // 그러나 protected, public들은 접근 가능.
  }
}
const LYC = new Human("yc", "L", "beigeseal", "faithfulCorder"); // new User은 불가능
LYC.getFullName();
/*
    interface : 클래스 or 객체를 위한 타입 지정 시 사용되는 문법
    1. class 타입 지정. Shape 라는 interface 를 선언합니다.
*/
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  /*
    `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    radius: number; // 멤버 변수 radius 값을 설정합니다.
    아래에서 public 사용해 따로 지정 안해주어도 됨
*/
  constructor(public radius: number) {
    // public 으로 선언된 값은 클래스 외부에서 조회 가능
    this.radius = radius;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  /* 
    width: number; 아래에서 private 사용해 따로 지정 안해주어도 됨
    height: number;
*/
  constructor(private width: number, private height: number) {
    // private 으로 선언된 값은 클래스 내부에서만 조회 가능
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// 2. 일반 객체 타입 지정
interface Person1 {
  name: string;
  age?: number; // 물음표: 설정 해도 되고 안해도 됨
}
interface Developer1 {
  name: string;
  age?: number;
  skills: string[];
}

const person1: Person1 = {
  name: "김사람",
  age: 20,
};

const expert1: Developer1 = {
  name: "김개발",
  skills: ["javascript", "react"],
};
// 위와 같이 Person, Developer처럼 형태가 비슷한 interface는 extends 키워드를 사용해 상속 가능
interface Person2 {
  name: string;
  age?: number;
}
interface Developer2 extends Person {
  skills: string[];
}

const person2: Person2 = {
  name: "김사람",
  age: 20,
};
const expert2: Developer2 = {
  name: "김개발",
  skills: ["javascript", "react"],
};

const people2: Person[] = [person2, expert2];
console.log(people2);

/*
    Type Alias 사용 : type은 특정 타입에 별칭을 붙임. 객체를 위한 타입 설정 가능, 배열이나 다른 타입 또한 가능
*/
type Person = {
  name: string;
  age?: number;
};
// 함수에서도 사용가능
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// &는 Intersection 으로서 두 개 이상의 타입들을 합쳐줌
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
};
const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const new_color: Color = "red";
const colors: Color[] = ["red", "orange"];

/*
    Generics :  함수, 클래스, interface, type alias 사용 시 여러 종류의 타입에 대해 호환을 맞춰야 할 때 사용
*/
// 1. 함수에서 사용
function merge1(a: any, b: any): any {
  return {
    ...a,
    ...b,
  };
}
const merged1 = merge1({ foo: 1 }, { bar: 1 });
// 위와 같은 경우 type 유추 깨짐. 뭐가 들었는지 모름(any)

function merge2<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}
const merged2 = merge2({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return param;
}
const wrapped = wrap(10);

// 2. interface에서 사용
interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  list: ["a", "b", "c"],
};

// 3. type에서 사용
type Things<T> = {
  list: T[];
};
const things: Things<string> = {
  list: ["a", "b", "c"],
};

// 4. class에서 사용
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
