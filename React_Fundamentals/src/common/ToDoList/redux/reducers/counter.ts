import { ADD_COUNTER, RESET_COUNTER } from "../actions/actions.types";

type PropsInitialState = typeof initalState;
const initalState = {
  amount: 0,
};

interface action {
    count: number,
    type: string
}

const counter = (state: PropsInitialState = initalState, action: action) => {
  switch (action.type) {
  case ADD_COUNTER:
    return {
      amount: ++state.amount
    };
  case RESET_COUNTER:
    return {
      amount: action.count
    };
  default:
    return state;
  }
};

export default counter;
