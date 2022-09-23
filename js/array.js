/*

● 배열 : 어떤 종류의 형태인 data든 저장 및 불러올 수 있게 해주는 linear data.
 - 내장함수 : forEach, map, indexOf, findIndex, find, filter, splice,
              slice, shift & pop, unshift, concat, join, reduce

*/

array = [1, 2, 3, 4, 5]

// array 항목 조회 : array[n] n은 0부터 4까지.
array[0];

// 배열에 새 항목 추가 : push 메소드 사용
objects = [{ name: '멍멍이' }, { name: '야옹이' }];
objects.push({ name: '영찬이' });
console.log(objects);

// 배열의 크기 : length 이용
console.log(objects.length);

/* forEach : for문 간단하게 대체 */
a = [1, 2, 3, 4, 5]
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
//를 아래처럼 간단하게
a.forEach(num => console.log(num));

/* map : 배열 안의 각 원소를 변환. 새로운 배열 만듦 */
const square = n => n * n;
const squared = a.map(square); // map 안에 함수 직접 param로 써도 똑같음
console.log(squared);

/* indexOf : 원하는 항목이 몇번째 원소인지 찾아줌(숫자, 문자열, 불리언) */
const index1 = a.indexOf; // 2

/* findIndex : 배열 안 값이 객체나 배열일 때 index 찾아줌 */
const university = [
    {
        id: 1,
        name: 'SNU',
        kor: '서울대학교'
    },
    {
        id: 2,
        name: 'KU',
        kor: '고려대학교'
    },
    {
        id: 3,
        name: 'YU',
        kor: '연세대학교'
    }
];
const index2 = university.findIndex(univ => univ.kor === '고려대학교');
console.log(index2);

/* find : 찾아낸 값이 몇번째인지가 아니라, 찾아낸 값 자체를 반환 */
const index3 = university.find(univ => univ.kor === '고려대학교');
console.log(index3); //{ id: 2, name: 'KU', kor: '고려대학교'}

/* filter : 특정 조건을 만족하는 값들만 따로 추출해 새로운 배열 만듦 */
const filtered = university.filter(univ => univ.kor !== '연세대학교');
console.log(filtered); // [{... kor: '서울대학교'}, {... kor: '고려대학교'}]

/* splice : 배열에서 특정 항목을 제거. 첫 파라미터 = 어떤 인덱스부터 지울지
두번째 파라미터 = 그 인덱스부터 몇개를 지울지 */
const numbers1 = [10, 20, 30, 40, 50];
numbers1.splice(numbers1.indexOf(30), 1);
console.log(numbers1); // [10, 20, 40, 50]

/* slice : 배열을 잘라낼 때 사용. 기존의 배열은 건드리지 않음 */
const numbers2 = [10, 20, 30, 40, 50];
const sliced = numbers2.slice(0, 2); // 0부터 시작해서 2전까지
console.log(sliced); // [10, 20]
console.log(numbers2); // [10, 20, 30, 40, 50]

/* shift : 첫번째 원소를 배열에서 추출(해당 원소는 삭제) */
const numbers3 = [10, 20, 30, 40];
const value1 = numbers3.shift();
console.log(value1); // 10
console.log(numbers3); // [20, 30, 40]

/* pop : 마지막 원소를 배열에서 추출(해당 원소는 삭제) */
const numbers4 = [10, 20, 30, 40];
const value2 = numbers4.pop();
console.log(value2); // 40
console.log(numbers4); // [10, 20, 30]

/* unshift : 배열의 맨 앞에 새 원소 추가 */
const numbers5 = [10, 20, 30, 40];
numbers5.unshift(5);
console.log(numbers5); // [5, 10, 20, 30, 40]

/* concat : 여러개의 배열을 하나의 배열로 합쳐줌 원래 array에는 영향X */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)) // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2.concat(arr1)) // [ 4, 5, 6, 1, 2, 3 ]

/* join : 배열 안의 값들을 문자열 형태로 합쳐줌 */
const array2 = [1, 2, 3, 4, 5];
console.log(array2.join()); // 1,2,3,4,5
console.log(array2.join(' ')); // 1 2 3 4 5
console.log(array2.join(', ')); // 1, 2, 3, 4, 5

/* reduce : 첫 번째 파라미터 = 콜백함수(accumulator, current)
두번째 파라미터 : reduce 함수에서 사용할 초기값
새로운 배열만들거나, 덧셈 및 산수할 때 편리*/
const tierList = [
    {
        name: '영찬',
        class: 'diamond',
        tier: '4'
    },
    {
        name: '덕수',
        class: 'bronze',
        tier: '1'
    },
    {
        name: '영성',
        class: 'silver',
        tier: '2'
    },
    {
        name: '찬영',
        class: 'platinum',
        tier: '3'
    }
]
let result = tierList.reduce((prev, cur) => {
    if (cur.tier > 2) {
        prev.push(cur);
    }
    return prev;
}, [])
console.log(result);