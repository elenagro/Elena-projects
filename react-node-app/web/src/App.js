import React, { useState } from "react";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Register from "./components/Register";

import "./App.css";

const App = () => {
  const [location, setLocation] = useState("login");

  const locationHandler = (e) => {
    setLocation(e.target.dataset.target);
  };
  return (
    <div>
      <Header locationHandler={locationHandler} />
      <div className="form">
        {location === "login" && <LogIn />}
        {location === "register" && <Register />}
      </div>
    </div>
  );
};

export default App;
