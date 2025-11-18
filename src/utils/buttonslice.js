import { createSlice } from "@reduxjs/toolkit";
import { SECTION } from "./sectiontype";

const buttonslice = createSlice({
  name: "button",
  initialState: {
    active: SECTION.NONE,
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = buttonslice.actions;
export default buttonslice.reducer;
