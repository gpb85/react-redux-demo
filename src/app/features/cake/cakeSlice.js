import { createSlice } from "@reduxjs/toolkit";

const cakeInitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: cakeInitialState,
  reducers: {
    smallOrder: (state) => {
      state.numOfCakes--;
    },
    bigOrder: (state, action) => {
      const qnt = action.payload;
      if (qnt > 0) {
        state.numOfCakes -= qnt;
      }
    },
    restocked: (state, action) => {
      const qnt = action.payload ?? 0;
      state.numOfCakes += qnt;
    },
  },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
