import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
  name: "template",
  initialState: {
    template: {}, // Initial state
  },
  reducers: {
    // Reducer to set the template
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
  },
});

// Exporting actions for dispatch
export const { setTemplate } = templateSlice.actions;

// Exporting reducer for store configuration
export default templateSlice.reducer;