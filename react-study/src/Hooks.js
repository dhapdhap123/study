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
● useMemo : 성능 최적화
● useCallback
● useReducer
*/

function Func_useState() {
  const [state, setState] = useState("초깃값");
}
/* 원래는 아래처럼 사용해야 하지만, 위처럼 배열 비구조화 할당 사용
    const stateWhat = useState("초깃값");
    const state = stateWhat[0];
    const setNumber = stateWhat[1];
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
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
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
