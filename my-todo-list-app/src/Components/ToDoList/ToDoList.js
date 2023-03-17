import React from "react";
import Alert from "react-bootstrap/Alert";

const ToDoList = (props) => {
  return (
    <div>
      <Alert key="warning" variant="warning" style={{ minWidth: "400px" }}>
        {props.data}
      </Alert>
    </div>
  );
};

export default ToDoList;
