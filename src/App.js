import React, { memo } from "react";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage";
import { AppRouter } from "./Router";

function App() {
  return <AppRouter />;
}

export default memo(App);
