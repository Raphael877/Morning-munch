import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
