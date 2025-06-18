import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface navbarState {
  isLoggedIn: boolean;
  isSignedUp: boolean;
}
const initialState: navbarState = {

  isLoggedIn: false,
  isSignedUp: false, 
};

const navbarState = createSlice({
  name: 'navbar',
  initialState,
  reducers: {

    RsetLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
      console.log('User logged in status:', state.isLoggedIn);
    },
    RsetSignedUp: (state, action: PayloadAction<boolean>) => {
      state.isSignedUp = action.payload;
      console.log('User signed up status:', state.isSignedUp);
    },
  },
});
export const selectLoggedIn =(state:RootState)=>
  state.navbar.isLoggedIn;
export const selectSignedUp =(state:RootState)=>
  state.navbar.isSignedUp;

export const { RsetLoggedIn, RsetSignedUp } = navbarState.actions;
export default navbarState.reducer;