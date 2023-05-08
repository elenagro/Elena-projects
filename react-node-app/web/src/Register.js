import React, { useState } from "react";

const Register = () => {
  const regData = {
    email: "",
    password: "",
    password2: "",
    fullName: "",
  };

  const [data, setData] = useState(regData);

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  //   The use of square brackets around e.target.name allows us to dynamically compute the key name based on the name attribute of the input element. This is necessary because the name attribute of the input element could be any string, and we want to use it as the key name in the state object.

  const registerHandler = async () => {
    // console.log(data);
    // try {
    //   let res = await fetch(`/api/v1/auth/create-account`, {
    //     method: "post",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (res.ok) {
    //     alert("User created!");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div>
      <h2>Register</h2>
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
      <label>
        <span>Confirm Password</span>
        <input
          type="password"
          name="password2"
          value={data.password2}
          onChange={inputHandler}
        />
      </label>
      <label>
        <span>Full Name</span>
        <input
          type="text"
          name="fullName"
          value={data.fullName}
          onChange={inputHandler}
        />
      </label>
      <button onClick={registerHandler}>Register</button>
    </div>
  );
};

export default Register;
