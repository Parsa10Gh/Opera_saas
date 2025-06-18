// src/slices/MainSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface MainState {
    gender: string;
    isGenderChecked: string;
    userName: string;
    password: string;
    showPassWord: boolean;
    showPasswordType: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
    email: string;
    forgetEmail: string;
    showPasswordConfirmation: boolean;
    showPasswordConfirmationType: string;
    formErrors: {
        gender: string,
        firstName: string,
        lastName: string,
        email: string,
        userName: string,
        password: string,
        passwordConfirmation: string,
        forgetEmail: string;
    };
    loginErrors: {
        userErrorStyle: object;
        passwordErrorStyle: object;
    };
    rememberMe: boolean;
    forgetTimer: number;
    forgetVerificationCode: string;
    emailExist: boolean;
    codeVerified: boolean;
    token: string | null;
}

const initialState: MainState = {
    gender: "",
    isGenderChecked: "no",
    userName: "",
    password: "",
    showPassWord: false,
    showPasswordType: "password",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
    email: "",
    forgetEmail: "",
    showPasswordConfirmation: false,
    showPasswordConfirmationType: "password",
    formErrors: {
        gender: "",
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        passwordConfirmation: "",
        forgetEmail: "",
    },
    loginErrors: {
        userErrorStyle: {},
        passwordErrorStyle: {},
    },
    rememberMe: false,
    forgetTimer: 0,
    forgetVerificationCode: "",
    emailExist: false,
    codeVerified: false,
    token: null,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    RsetGender: (state, action: PayloadAction<string>) => {
        state.gender = action.payload;
    },
    RsetIsGenderChecked: (state, action: PayloadAction<string>) => {
        state.isGenderChecked = action.payload;
    },
    RsetUserName: (state, action: PayloadAction<string>) => {
        state.userName = action.payload;
    },
    RsetPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload;
    },
    RsetShowPassword: (state, action: PayloadAction<boolean>) => {
        state.showPassWord = !state.showPassWord;
    },
    RsetShowPasswordType: (state , action: PayloadAction<string>) => {
        state.showPasswordType = action.payload;
    },
    RsetPasswordConfirmation: (state, action: PayloadAction<string>) => {
        state.passwordConfirmation = action.payload;
    },
    RsetShowPasswordConfirmationType: (state , action: PayloadAction<string>) => {
        state.showPasswordConfirmationType = action.payload;
    },
    RsetFirstName: (state, action: PayloadAction<string>) => {
        state.firstName = action.payload;
    },
    RsetLastName: (state, action: PayloadAction<string>) => {
        state.lastName = action.payload;
    },
    RsetEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
    },
    RsetShowPasswordConfirmation: (state, action: PayloadAction<boolean>) => {
        state.showPasswordConfirmation = !state.showPasswordConfirmation;
    },
    RsetFormErrors: (state, action) => {
        state.formErrors.gender = action.payload.gender;
        state.formErrors.firstName = action.payload.firstName;
        state.formErrors.lastName = action.payload.lastName;
        state.formErrors.email = action.payload.email;
        state.formErrors.userName = action.payload.userName;
        state.formErrors.password = action.payload.password;
        state.formErrors.passwordConfirmation = action.payload.passwordConfirmation;
        state.formErrors.forgetEmail = action.payload.forgetEmail;
    },
    RsetLoginErrors: (state, action) => {
        state.loginErrors.userErrorStyle = action.payload.userErrorStyle;
        state.loginErrors.passwordErrorStyle = action.payload.passwordErrorStyle;
    },
    RsetRememberMe: (state, action: PayloadAction<boolean>) => {
        state.rememberMe = action.payload;
    },
    RsetToken: (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      },
      RsetForgetEmail: (state, action: PayloadAction<string>) => {
        state.forgetEmail = action.payload;
    },
    RsetForgetTimer: (state, action: PayloadAction<number>) => {
        state.forgetTimer = action.payload;
    },
    RsetForgetVerficationCode: (state, action: PayloadAction<string>) => {
        state.forgetVerificationCode = action.payload;
    },
    RsetEmailExist: (state, action: PayloadAction<boolean>) => {
        state.emailExist = action.payload;
    },
    RsetCodeVerified: (state, action: PayloadAction<boolean>) => {
        state.codeVerified = action.payload;
    },
  },
});

export const { RsetGender , RsetIsGenderChecked, RsetUserName, RsetPassword, RsetShowPassword, RsetShowPasswordType,
    RsetPasswordConfirmation, RsetFirstName, RsetLastName, RsetEmail, RsetForgetEmail, RsetShowPasswordConfirmation,
    RsetShowPasswordConfirmationType, RsetFormErrors, RsetLoginErrors, RsetRememberMe, RsetForgetTimer,
    RsetForgetVerficationCode, RsetEmailExist,RsetCodeVerified, RsetToken } = mainSlice.actions;
export const selectGender = (state:RootState) => state.main.gender;
export const selectIsGenderChecked = (state:RootState) => state.main.isGenderChecked;
export const selectUserName = (state:RootState) => state.main.userName;
export const selectPassword = (state:RootState) => state.main.password;
export const selectShowPassword = (state:RootState) => state.main.showPassWord;
export const selectShowPasswordType = (state:RootState) => state.main.showPasswordType;
export const selectShowPasswordConfirmationType = (state:RootState) => state.main.showPasswordConfirmationType;
export const selectFirstName = (state:RootState) => state.main.firstName; 
export const selectLastName = (state:RootState) => state.main.lastName;
export const selectEmail = (state:RootState) => state.main.email;
export const selectPasswordConfirmation = (state:RootState) => state.main.passwordConfirmation;
export const selectShowPasswordConfirmation = (state:RootState) => state.main.showPasswordConfirmation;
export const selectFormErrors = (state:RootState) => state.main.formErrors;
export const selectLoginErrors = (state:RootState) => state.main.loginErrors;
export const selectRememberMe = (state:RootState) => state.main.rememberMe;
export const selectForgetEmail = (state:RootState) => state.main.forgetEmail;
export const selectForgetTimer = (state:RootState) => state.main.forgetTimer;
export const selectForgetVerficationCode = (state:RootState) => state.main.forgetVerificationCode;
export const selectEmailExist = (state:RootState) => state.main.emailExist;
export const selectCodeVerfied = (state:RootState) => state.main.codeVerified;
export const selectToken = (state:RootState) => state.main.token;
export default mainSlice.reducer;
