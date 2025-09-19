import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;
