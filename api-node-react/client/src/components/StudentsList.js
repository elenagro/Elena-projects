import React from "react";

const StudentsList = (props) => {
  return (
    <ul>
      {props.students.map((student) => {
        return (
          <div>
            <h3>{props.name}</h3>
            <p>{props.grade}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default StudentsList;
