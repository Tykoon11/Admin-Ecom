import { createStore } from "redux";

const initialState = {
  token: "",
  user: null,
};

const ACTION = "ACTION";
const USER = "USER";

export function setToken(value: string) {
  return {
    type: ACTION,
    payload: value,
  };
}
export function setUser(value: string) {
  return {
    type: USER,
    payload: value,
  };
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        token: action.payload,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
