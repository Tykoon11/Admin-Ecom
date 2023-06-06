import { createStore } from "redux";

const initialState = {
  token: "",
};

const ACTION = "ACTION";

export function setToken(value: string) {
  return {
    type: ACTION,
    payload: value,
  };
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
