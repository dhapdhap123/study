import React, { useReducer, useState } from 'react';
import Student from './Student';

function reducer(state, action) {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    default:
      return state;
  }
}

const Reducerprac = () => {
  const initialState = {
    count: 0,
    students: [
      {
        id: Date.now(),
        name: 'James',
        isHere: false,
      },
    ],
  };
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentInfo.count}</p>
      <input type="text" placeholder="name" value={name} onChange={onChange} />
      <button
        onClick={() => {
          dispatch({ type: 'add-stduent', payload: { name } });
        }}
      >
        추가
      </button>
      {studentInfo.students.map((student) => {
        return <Student key={student.id} name={student.name} />;
      })}
    </div>
  );
};

export default Reducerprac;
