import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templateSlice.js"
import textReducer from "./textSlice.js"
import selectReducer from "./selectedItemSlice.js";

export default configureStore({
  reducer : {
    template: templateReducer,
    text: textReducer,
    SelectedItem : selectReducer, 
  },
})