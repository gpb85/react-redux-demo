import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice.js";
import icecreamReducer from "./features/icecream/icecreamSlice.js";
import userReducer from "./features/user/userSlice.js";

//import pkg from "redux-logger";
//const { createLogger } = pkg;

//const logger = createLogger();

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: icecreamReducer,
    user: userReducer,
  },
});

console.log("initialState: ", store.getState());
const unSubscribe = store.subscribe(() =>
  console.log("updated State: ", store.getState())
);

unSubscribe();
