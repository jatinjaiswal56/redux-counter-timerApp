import { counterReducer } from "./redux/reducers/counterReducer";
const { timerReducer } = require("./redux/reducers/timerReducer");
import { combineReducers, createStore } from "redux";

// import counter reducer function here


// combine the reducer functions here

// add the root reducer function to store here
const rootReducer = combineReducers({
    counter: counterReducer,
    timer: timerReducer
  });
  
  // Add the root reducer function to the store
  export const store = createStore(rootReducer);
