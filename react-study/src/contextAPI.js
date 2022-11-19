import React from "react";
/*
    특정함수를 특정 컴포넌트를 거쳐서 원하는 컴포넌트에 전달하는 작업은 자주 발생
    ex) App => UserContainer => User 순으로 props 전달
    만약 3~4개 이상의 컴포넌트를 거쳐 전달한다면?
    => 이러한 번거로움을 ContextAPI와 dispatch를 함께 사용해 해결
*/

// Context를 만드는 함수,기본값(context 값 따로 지정하지 않았을 경우) 설정
const UserDispatch = React.createContext(null);

// 만든 후에는 Context 안에 있는 Provider 컴포넌트를 통해 Context 값 지정 가능
<UserDispatch.Provider value={"이런 식으로 지정해요"}></UserDispatch.Provider>;
