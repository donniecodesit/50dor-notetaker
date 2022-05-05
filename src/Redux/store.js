import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./Notes/notesSlice";

export default configureStore({
    reducer: notesReducer
})