import React, { useState } from "react";
import "./LogIn.css";

const LogIn = () => {
  const logInData = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(logInData);

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const logInHandler = async () => {
    console.log(data);

    // try {
    //     let res = await fetch(
    //         `/api/v1/auth/login`,
    //         {
    //             method: 'post',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }
    //     );
    //     let out = await res.json();
    //     alert(out.token);
    //     console.log(out);
    // } catch(err) {
    //     console.log(err);
    // }
  };

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <label>
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={inputHandler}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={inputHandler}
        />
      </label>
      <button onClick={logInHandler}>Log In</button>
    </div>
  );
};

export default LogIn;
