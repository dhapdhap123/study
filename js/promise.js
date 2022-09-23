/*

Promise는 비동기 작업을 위해 ES6에서 도입된 기능.
=> callback은 너무 지저분하기 때문(Callback Hell)
=> 코드의 깊이가 깊어짐.

● 장점 : 비동기 작업 개수가 많아져도 코드의 깊이 깊지X.
● 단점 :
 - 에러를 잡을 때 몇번째에서 발생했는지 알아내기 어려움.
 - 특정 조건에 따라 분기를 나누는 작업 어려움.
 - 특정 값을 공유해가면서 작업 처리하기 까다로움.

*/

// Promise 만드는 법.
const myPromise = new Promise((resolve, reject) => {
    // 구현..
})
// 성공, 실패 가능. 성공은 resolve 호출 / 실패는 reject 호출


// 예시
function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}
increaseAndPrint(0).then((n) => {
    console.log('result: ', n);
})

// then은 여러번 연속해 사용도 가능
function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint(0)
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .then(n => {
        return increaseAndPrint(n);
    })
    .catch(e => {
        console.error(e);
    });

/*
이렇게도 가능

increaseAndPrint(0)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.error(e);
});

*/