import React from "react";
import "./App.css";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
