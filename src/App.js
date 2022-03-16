import React, { memo } from "react";
import { AppRouter } from "./Router";
import { DataContextProvider } from "./context";
import "./App.scss";

function App() {
  return (
    <DataContextProvider>
      <AppRouter />
    </DataContextProvider>
  );
}

export default memo(App);
