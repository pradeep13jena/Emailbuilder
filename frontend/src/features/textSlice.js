import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: {
    text: "" // Initial state
  },
  reducers: {
    // Reducer to set the template
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

// Exporting actions for dispatch
export const { setText } = textSlice.actions;

// Exporting reducer for store configuration
export default textSlice.reducer;