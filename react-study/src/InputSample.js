import React, { useEffect, useRef, useState } from "react";

function InputSample() {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      value: 1,
      visible: true,
    },
    {
      id: 2,
      value: 2,
      visible: true,
    },
  ]);
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  const nextId = useRef(3);
  const newButton = {
    id: nextId.current,
    value: nextId.current,
    visible: true,
  };
  const onCreate = () => {
    setButtons(buttons.concat(newButton));
    nextId.current += 1;
  };
  const onRemove = () => {
    if (nextId.current !== 1) {
      setButtons(buttons.filter((b) => b.id !== nextId.current - 1));
      nextId.current -= 1;
    } else {
      return;
    }
  };
  const onToggle = (e) => {
    setButtons(
      buttons.map((b) =>
        b.id === parseInt(e.target.id) ? { ...b, visible: !b.visible } : b
      )
    );
  };
  return (
    <>
      <button onClick={onCreate}>생성</button>
      <button onClick={onRemove}>삭제</button>
      {buttons.map((b) => (
        <button key={b.id} onClick={onToggle} id={b.id}>
          {b.visible === true ? b.value : null}
        </button>
      ))}
    </>
  );
}

export default InputSample;
