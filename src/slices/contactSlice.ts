// contactSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  contactName: string;
  contactPhoneNumber?: string; 
  contactText: string;
  contactEmail: string;
  emailError: string;
  nameError: string;
  numberError: string;
  textError: string;
}

const initialState: ContactState = {
  contactName: "",
  contactPhoneNumber: undefined,
  contactText: "",
  contactEmail: "",
  emailError: "",
  nameError: "",
  numberError: "",
  textError: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    RsetContactName(state, action: PayloadAction<string>) {
      state.contactName = action.payload;
      console.log(state.contactName);
    },
    RsetContactPhoneNumber(state, action: PayloadAction<string | undefined>) {
      state.contactPhoneNumber = action.payload;
      console.log(state.contactPhoneNumber);
    },
    RsetContactText(state, action: PayloadAction<string>) {
      state.contactText = action.payload;
      console.log(state.contactText);
    },

    RsetContactEmail(state, action: PayloadAction<string>) {
      state.contactEmail = action.payload;
      console.log(state.contactEmail);
    },

    RsetEmailError: (state, action) => {
      state.emailError = action.payload;
    },

    RsetNameError(state, action: PayloadAction<string>) {
      state.nameError = action.payload;
    },
    RsetNumberError(state, action: PayloadAction<string>) {
      state.numberError = action.payload;
    },

    RsetTextError(state, action: PayloadAction<string>) {
      state.textError = action.payload;
      console.log(state.textError);
    },

    RsetContactForm(state) {
      state.contactName = "";
      state.contactPhoneNumber = undefined;
      state.contactText = "";
      state.contactEmail = "";
      state.emailError = "";
      state.nameError = "";
      state.numberError = "";
      state.textError = "";
    },
  },
});

export const {
  RsetContactName,
  RsetContactPhoneNumber,
  RsetContactText,
  RsetContactEmail,
  RsetContactForm,
  RsetEmailError,
  RsetNameError,
  RsetTextError,
  RsetNumberError,
} = contactSlice.actions;
export default contactSlice.reducer;
