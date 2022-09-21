/*

● 객체 생성자 : 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 값, 함수를 구현 할 수 있게 해 줌.
 - 보통 함수 이름 대문자, 새로운 객체 만들 땐 new 붙여줘야 함.

*/
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;    
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    };
}
const dog = new Animal('개', '멍멍이', '멍멍')
const cat = new Animal('고양이', '야옹이', '야옹')
dog.say();
cat.say();

// 프로토타입 : 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값 재사용 가능.
// 생성 : .prototype.[원하는키] = 코드
function Animals(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}
Animals.prototype.say = function() {
    console.log(this.sound);
};
Animals.prototype.sharedValue = 1;

function Dog(name, sound) {
    Animals.call(this, '개', name, sound);
}
Dog.prototype = Animals.prototype;
  
function Cat(name, sound) {
    Animals.call(this, '고양이', name, sound);
}
Cat.prototype = Animals.prototype;

const doggy = new Dog('멍멍이', '멍멍');
const kitty = new Cat('야옹이', '야옹');

doggy.say();
kitty.say();

// 클래스 : ES6에서 생긴 문법. 객체 생성자의 생성, 상속을 더 쉽게 가능케 함.
class Animal2 {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

const dogdog = new Animal2('개', '멍멍이', '멍멍');
const catcat = new Animal2('개', '멍멍이', '멍멍');

dogdog.say();
catcat.say();

// 상속 : extends 키워드, super()함수 : 상속받은 클래스의 생성자를 가르킴
class Food {
    constructor(name, country, price) {
        this.name = name;
        this.country = country;
        this.price = price;
    }
    where() {
        console.log(this.country);
    }
    howMuch() {
        console.log(this.price);
    }
}

class Kimchi extends Food {
    constructor(country, price) {
        super('kimchi', country, price);
    }
}

class Spaghetti extends Food {
    constructor(country, price) {
        super('spaghetti', country, price);
    }
}

const kimchi = new Kimchi('한국', '5000원');
const spaghetti = new Spaghetti('이탈리아', '15000원');

kimchi.where();
spaghetti.howMuch();