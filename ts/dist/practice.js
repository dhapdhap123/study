"use strict";
// 기본 자료형 : number, string, boolean
let count = 0;
count += 1;
const message = "hello world";
const done = true;
// 배열 선언
const numbers = [1, 2, 3];
const messages = ["hello", "world"];
let mightBeUndefined = undefined;
let nullableNumber = null;
// 이 값들 중 하나
let color = "red";
color = "yellow";
color = "orange";
// 함수에서의 사용
function sum(x, y) {
    return x + y;
}
sum(1, 2);
// 배열 내장함수 사용 때도 parameter의 타입 유추 쉬움
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
// return 값 없으면 반환 타입 void로 설정
function returnNothing() {
    console.log("I am just saying hello world");
}
class Circle {
    /*
      `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
      radius: number; // 멤버 변수 radius 값을 설정합니다.
      아래에서 public 사용해 따로 지정 안해주어도 됨
  */
    constructor(radius) {
        this.radius = radius;
        // public 으로 선언된 값은 클래스 외부에서 조회 가능
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    /*
      width: number; 아래에서 private 사용해 따로 지정 안해주어도 됨
      height: number;
  */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // private 으로 선언된 값은 클래스 내부에서만 조회 가능
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
const person1 = {
    name: "김사람",
    age: 20,
};
const expert1 = {
    name: "김개발",
    skills: ["javascript", "react"],
};
const person2 = {
    name: "김사람",
    age: 20,
};
const expert2 = {
    name: "김개발",
    skills: ["javascript", "react"],
};
const people2 = [person2, expert2];
console.log(people2);
const person = {
    name: "김사람",
};
const expert = {
    name: "김개발",
    skills: ["javascript", "react"],
};
const people = [person, expert];
const new_color = "red";
const colors = ["red", "orange"];
/*
    Generics :  함수, 클래스, interface, type alias 사용 시 여러 종류의 타입에 대해 호환을 맞춰야 할 때 사용
*/
// 1. 함수에서 사용
function merge1(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged1 = merge1({ foo: 1 }, { bar: 1 });
// 위와 같은 경우 type 유추 깨짐. 뭐가 들었는지 모름(any)
function merge2(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged2 = merge2({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return param;
}
const wrapped = wrap(10);
const items = {
    list: ["a", "b", "c"],
};
const things = {
    list: ["a", "b", "c"],
};
// 4. class에서 사용
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
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
