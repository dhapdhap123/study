import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

/*
● useState : 상태값 관리, rerendering
● useRef : 특정 DOM에 접근(focus, 스크롤박스, canvas 사용 등)
● useEffect
● useMemo
● useCallback
● useReducer
*/

function func_useState() {
  const [state, setState] = useState("초깃값");
}
/* 원래는 아래처럼 사용해야 하지만, 위처럼 배열 비구조화 할당 사용
    const stateWhat = useState("초깃값");
    const state = stateWhat[0];
    const setNumber = stateWhat[1];
*/

// 여러 input의 state값 한번에 관리
function input_useState() {
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
function input_useRef() {
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
function otherUse_useRef() {
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
        <li key={id}>{u.username}</li>
      ))}
    </>
  );
}
