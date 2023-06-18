import { createStore } from "redux";

const initialState = {
  token: "",
  user: null,
};

const initial =
  JSON.parse(
    typeof window !== "undefined"
      ? (window.localStorage.getItem("state") as unknown as any)
      : false
  ) ?? initialState;

const ACTION = "ACTION";
const USER = "USER";
const RESET_STATE = "RESET_STATE";


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
export function resetState() {
  return {
    type: RESET_STATE,
  };
}

const reducer = (state = initial, action: any) => {
  let newState = null;
  switch (action.type) {
    case ACTION:
      newState = {
        ...state,
        token: action.payload,
      };
      break;
    case USER:
      newState = {
        ...state,
        user: action.payload,
      };
      break;
    case RESET_STATE:
      return initial;
    default:
      newState = state;
  }
  typeof window !== "undefined"
    ? window.localStorage.setItem("state", JSON.stringify(newState))
    : false;
  return newState;
};

export const store = createStore(reducer);
