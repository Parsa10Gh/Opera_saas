// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../slices/MainSlice'; // Adjust path if needed
import navbarReducer from "../slices/NavbarSlices";
import contactReducer from "../slices/contactSlice"
const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    contact: contactReducer,
    main: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
