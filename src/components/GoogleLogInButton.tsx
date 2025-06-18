// src/components/GoogleLoginButton.tsx

"use client";

import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

interface GoogleLoginButtonProps {
  onSuccess: (response: any) => void;
  onError: (error: any) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onSuccess, onError }) => {
  const login = useGoogleLogin({
    onSuccess,
    onError,
  });

  return (
    <button onClick={() => login()} className="bg-blue-500 text-white p-2 rounded">
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
