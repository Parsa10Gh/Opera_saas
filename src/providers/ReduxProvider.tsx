// src/app/ReduxWrapper.tsx
"use client"; // Ensures this component is client-side

import React from "react";
import { Provider } from "react-redux";
import store from "../store/store"; // Adjust the path if necessary

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
