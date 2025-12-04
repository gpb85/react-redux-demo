import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";

const icecreamInitialState = { numOfIcecreams: 20 };

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: icecreamInitialState,
  reducers: {
    smallOrder: (state) => {
      state.numOfIcecreams--;
    },
    bigOrder: (state, action) => {
      const qnt = action.payload;
      if (qnt > 0) {
        state.numOfIcecreams -= qnt;
      }
    },
    restocked: (state, action) => {
      const qnt = action.payload ?? 0;
      state.numOfIcecreams += qnt;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.bigOrder, (state, action) => {
      const qnt = action.payload;
      if (!qnt || qnt < 4) return;

      const offer = qnt === 4 ? 2 : 3;
      state.numOfIcecreams -= offer;
    });
  },
});

export default icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;
