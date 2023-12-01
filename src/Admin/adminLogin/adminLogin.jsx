import React from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../../Components/logInComp/logInForm";
import ErrorHandler from "../../Global/errorHandler";
import setCookie from "../../Global/setCookie";

const AdminLogin = () => {

  const navigate = useNavigate()

  const boxClass = "loginBox";

  const inputFields = [
    { placeholder: "Username", id: "userName" },
    { placeholder: "Password", id: "password", type: "password" },
  ];

  const logIn = async () => {
    const logIns = inputFields.map((i) =>
      document.getElementById(i.id).value
    );

    try {
      const res = await fetch("http://localhost:3001/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(logIns),
      });
      if (res.ok) {
        const response = await res.json();
        if (response.message === "success") {
          setCookie("adminToken",response.token,1);
          navigate("/adminpanel")
        }
        if (response.message === "fail") {
          alert("No admin with those login details exist");
        }
      } else {
        let error = ErrorHandler(res);
        alert(error.message);
      }
    } catch (err) {
      let error = ErrorHandler(err);
      alert(error.message);
    }
  };

  return (
    <LoginForm
      boxClass={boxClass}
      logIn={logIn}
      inputFields={inputFields}
      type={"admin"}
    />
  );
};

export default AdminLogin;