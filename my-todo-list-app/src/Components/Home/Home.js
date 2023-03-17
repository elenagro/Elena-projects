import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h2 className="home-heading">Welcome to my To-Do List App!</h2>
      <Button
        className="btn-home"
        style={{ color: "white" }}
        variant="outline-warning"
        size="lg"
        onClick={() => navigate("./main")}
      >
        Get Started
      </Button>{" "}
    </div>
  );
};

export default Home;
