/*
어떠한 값을 컴포넌트에게 전달해줘야 할 때 props 사용
props는 객체 형태로 전달
*/
function App1() {
  return (
    <>
      <Hello1 name="react" color="red" />
      <Hello2 name="react" color="red" />
    </>
  );
}
function Hello1(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
}

// parameter에서 비구조화 할당(구조 분해)으로 쉽게 접근 가능
function Hello2({ color, name }) {
  return <div style={{ color: color }}>안녕하세요 {name}</div>;
}

// defaultProps로 props 저장하지 않았을 때 기본적으로 사용할 값 설정 가능
Hello2.defaultProps = {
  name: "이름없음",
};

// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children으로 조회
function App2() {
  return (
    <Wrapper1>
      <Hello1 name="react" color="red" />
      <Hello2 color="pink" />
    </Wrapper1>
  );
}

// App2 component에서 Wrapper1 태그 사이에 Hello1 component 넣어줬음.
// 그러나 Wrapper가 아래와 같다면 안보임.
function Wrapper1() {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}></div>;
}

// Wrapper에서 props.children을 렌더링 해줘야 보임.
function Wrapper2({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}

// props.example 값 설정 생략
// <Component example />은 <Componenet example={true} />와 같음
