import React, { useState } from "react";
import LogIn from "./LogIn";
import Register from "./Register";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState("login");

  const locationHandler = (e) => {
    setLocation(e.target.dataset.target);
  };

  return (
    <div>
      <nav className="nav">
        <button
          className="login-btn"
          onClick={locationHandler}
          data-target="login"
        >
          Log In
        </button>
        <button
          className="register-btn"
          onClick={locationHandler}
          data-target="register"
        >
          Register
        </button>
      </nav>
      <div className="form">
        {location === "login" && <LogIn />}
        {location === "register" && <Register />}
      </div>
    </div>
  );
};

export default App;
