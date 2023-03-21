import React, { useState } from "react";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredGrade, setEnteredGrade] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const gradeHandler = (event) => {
    setEnteredGrade(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const studentData = {
      id: Math.random().toString(),
      name: enteredName,
      grade: enteredGrade,
    };
    props.onAddStudent(studentData);
    setEnteredName("");
    setEnteredGrade("");
  };

  return (
    <div>
      <h2>Student's list</h2>
      <form onSubmit={clickHandler}>
        <label>Student's name and surname:</label>
        <input type="text" value={enteredName} onChange={nameHandler}></input>
        <label>Student's grade:</label>
        <input
          type="number"
          value={enteredGrade}
          onChange={gradeHandler}
        ></input>
        <button type="submit" onClick={clickHandler}>
          Add student
        </button>
      </form>
    </div>
  );
};

export default Form;
