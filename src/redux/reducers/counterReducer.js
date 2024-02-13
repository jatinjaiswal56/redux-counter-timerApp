import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions/counterActions';

const INITIAL_STATE = { count: 0 };

// Define counter reducer function
export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    case RESET_COUNTER:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
