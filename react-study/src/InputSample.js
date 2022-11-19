import { useCallback, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = "";
        return acc;
      }, {});
    default:
      return;
  }
}

function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);
  const reset = useCallback(() => dispatch("RESET"), []);
  return [state, onChange, reset];
}

export default useInputs;
