import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StudentsList from "./components/StudentsList";

function App(props) {
  const [studentGrades, setStudentGrades] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/studenti");
        const data = await response.json();
        setStudentGrades(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const studentsHandler = (event) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: props.name, grade: props.grade }),
    };
    fetch("http://localhost:8080/studenti", requestOptions)
      .then((response) => response.json())
      .then((data) => setStudentGrades(data));
  };

  return (
    <div className="App">
      <Form onAddStudent={studentsHandler} />
      <StudentsList students={studentGrades} />
    </div>
  );
}

export default App;
