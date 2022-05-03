import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Season2022, Races, RaceInfo, Homepage, LoginPage } from "src/pages";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/season2022" element={<Season2022 />}></Route>
        <Route path="/races" element={<Races />}></Route>
        <Route path="/races/:raceNameId" element={<RaceInfo />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
