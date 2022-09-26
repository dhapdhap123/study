import React, { useReducer } from 'react';
import useInput from './useInput';

const Info = () => {
  const [state, onChange] = useInput({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <p>
          <b>이름: </b>
          {name}
        </p>
      </div>
      <div>
        <p>
          <b>닉네임: </b>
          {nickname}
        </p>
      </div>
    </div>
  );
};

export default Info;
