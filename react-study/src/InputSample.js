import React, { useRef, useState } from "react";

const InputSample = () => {
  const nameInput = useRef("초깃값");

  console.log(nameInput.current);

  return (
    <div>
      <input ref={nameInput} />
    </div>
  );
};

export default InputSample;
