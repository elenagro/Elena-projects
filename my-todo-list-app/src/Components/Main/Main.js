import React, { useState } from "react";
import "./Main.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToDoList from "../ToDoList/ToDoList";

const Main = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const inputHandler = (event) => {
    setItem(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    setItems((prevItems) => [item, ...prevItems]);
    setItem("");
  };

  const deleteItem = (key) => {
    setItems((items) => items.filter((item, i) => i !== key));
  };

  const deleteAllItems = () => {
    setItems([]);
  };

  return (
    <div className="main-page">
      <h1 className="main-heading">What are the activities for today?</h1>
      <Box
        className="input-main"
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Add your items"
          id="fullWidth"
          value={item}
          onChange={inputHandler}
        />
      </Box>
      <Button
        style={{
          backgroundColor: "rgb(209, 146, 0)",
          marginTop: "25%",
          marginRight: "10%",
        }}
        variant="contained"
        size="medium"
        className="btn-main"
        onClick={clickHandler}
      >
        Add
      </Button>
      <Button
        variant="outlined"
        onClick={deleteAllItems}
        style={{ marginTop: "25%", marginRight: "10%" }}
      >
        Delete All
      </Button>
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="list">
            <ToDoList data={item} />
            <Button onClick={() => deleteItem(index)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
