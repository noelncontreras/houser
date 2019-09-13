import React from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/*routes may go here in the place of Dashboard and Wizard*/}
      <Dashboard />
      <Wizard />
    </div>
  );
};
