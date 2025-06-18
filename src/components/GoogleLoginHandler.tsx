// src/components/GoogleLoginHandler.tsx

"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, RsetToken } from "../slices/MainSlice";
import { RootState } from "../store/store";
import GoogleLoginButton from "../components/GoogleLogInButton";

const GoogleLoginHandler: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.main.token);

  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Success:", credentialResponse);
    const token = credentialResponse.access_token;
    dispatch(RsetToken(token));
  };

  const handleLoginError = (error: any) => {
    console.error("Login Error:", error);
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <GoogleLoginButton onSuccess={handleLoginSuccess} onError={handleLoginError} />
      {token && (
        <div className="mt-4 p-4 bg-green-200 rounded">
          <h2 className="text-xl">Logged in with token:</h2>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
};

export default GoogleLoginHandler;
