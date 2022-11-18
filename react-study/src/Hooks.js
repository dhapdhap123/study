import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

/*
● useState : 상태값 관리, 값 변경될 때 re-rendering
● useRef : 특정 DOM에 접근(focus, 스크롤박스, canvas 사용 등)
● useEffect : 컴포넌트가 마운트(처음 나타날 때), 언마운트(사라질 때), 업데이트(특정 props가 바뀔 때) 특정 작업 처리
● useReducer : state를 컴포넌트 바깥에 작성, 다른 파일에 작성 후 불러와서 사용 가능

<최적화 Hook>
● useMemo : 성능 최적화 위해 연산된 값 재사용
● useCallback : 특정 함수 새로 만들지 않고 재사용하고 싶을 때 사용
● React.memo : 컴포넌트 props가 바뀌지 않았다면 리렌더링 방지
*/

function Func_useState() {
  const [state, setState] = useState("초깃값");
}
/* 원래는 아래처럼 사용해야 하지만, 위처럼 배열 비구조화 할당 사용
    const stateWhat = useState("초깃값");
    const state = stateWhat[0];
    const setNumber = stateWhat[1];

  + setState는 비동기로 동작함(batch) => 동기적으로 사용하려면 함수형 업데이트 사용
  ex) setState(prev => prev + 1)
*/

// 여러 input의 state값 한번에 관리
function Input_useState() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <div>
      <input name="id" placeholder="id" onChange={onChange} value={id} />
      <input
        name="password"
        placeholder="password"
        onChange={onChange}
        value={password}
      />
    </div>
  );
}

// useRef
function Input_useRef() {
  const nameinput = useRef("초깃값");

  console.log(nameinput.current); // <input>

  return (
    <div>
      <input ref={nameinput} />
    </div>
  );
}

// useRef는 re-render와 독립적 => 컴포넌트 안의 변수 만들 수 있음.
// useState는 렌더링 이후로 업데이트 된 상태 조회 / useRef는 변수 설정 후 바로 조회 가능
// setTimeout, setInterval을 통해 만들어진 id, 외부 라이브러리 인스턴스, scroll 위치 등 사용
function OtherUse_useRef() {
  const users = [
    {
      id: 1,
      username: "beigeseal",
    },
    {
      id: 2,
      username: "tester",
    },
  ];

  const nextId = useRef(3);
  const onCreate = () => {
    nextId.current += 1;
  };
  return (
    <>
      {users.map((u) => (
        <li key={u.id}>{u.username}</li>
      ))}
    </>
  );
}

// useEffect : 두 번째 parameter(deps) 배열 비우면, 컴포넌트가 처음 나타날 때에만 함수 호출
// deps에 값 넣으면 컴포넌트 처음 마운트 시 호출, 지정된 값 바뀔 때 호출, 언마운트 시 호출, 값이 바뀌기 직전에도 호출
// deps 파라미터 생략하면 컴포넌트 리렌더링 시마다 호출
// 마운트 시 하는 작업들 : props 값 -> 컴포넌트 로컬 상태 설정, 외부 API 요청(REST 등), 라이브러리 사용(D3, Vidoe.js 등), setInterval(반복작업), setTimeout(작업 예약)
// 언마운트 시 하는 작업들 : setinterval, setTimeout을 사용해 등록한 작업들 clear(clreaInterval, clearTimeout), 라이브러리 인스턴스 제거
function Use_Effect() {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      value: 1,
    },
  ]);
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남"); //마운트
    return () => {
      //useEffect에서 함수 반환 : cleanup함수 - deps가 비어있으면 컴포넌트가 사라질 때 cleanup함수 호출
      console.log("컴포넌트가 화면에서 사라짐"); //언마운트
    };
  }, []);

  const nextId = useRef(2);
  const onCreate = () => {
    setButtons(
      buttons.concat({
        id: nextId,
        value: nextId,
      })
    );
    nextId.current += 1;
  };
  const onRemove = () => {
    setButtons(buttons.filter((b) => b.id !== nextId - 1));
    nextId.current -= 1;
  };
  return (
    <>
      <button onClick={onCreate}>생성</button>
      <button onClick={onRemove}>삭제</button>
    </>
  );
}

// useMemo : 첫 번째 파라미터 - 어떻게 연산할지 정의하는 함수, 두 번째 파라미터 - deps배열, 배열 안에 넣은 내용 바뀌면 등록 함수 호출해 값 연산 => 내용 바뀌지 않았다면 이전 연산 값 재사용
function Use_Memo() {
  function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는중...");
    return users.filter((user) => user.active).length;
  }
  const users = [
    {
      id: "1",
      active: true,
    },
    {
      id: "2",
      active: false,
    },
    {
      id: "3",
      active: true,
    },
  ];
  const count = useMemo(() => countActiveUsers(users), [users]);
  return <div>활성화된 user : {count}</div>;
}

// useCallback : 함수 안에서 사용하는 상태 혹은 props는 반드시 deps배열 안에 포함시켜야 함.
function Use_callback() {
  const [count, setCount] = useState();
  const plus = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
}
/* useCallback은 useMemo를 기반으로 만들어졌기 때문에 아래와 같이 표현도 가능

  const onToggle = useMemo(
  () => () => {
    아무내용
  },
  [users]
);
*/

// 성능 최적화 시 useMemo, useCallback의 deps에 값이 들어 있다면 React.memo 사용해도 deps 배열 값이 바뀔때마다 함수가 새로 만들어짐
// => setState에 함수형 업데이트를 사용하고, 위의 것들에 deps값을 없애주어 이를 참조하지 않게 만들면, 처음 한번만 렌더링 되지만 값은 최신으로 가질 수 있음.

/* useReducer 사용법
  const [state, dispatch] = useReducer(reducer, initialState);
*/
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
