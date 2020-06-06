import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../../useForm.js";
import { validateLogin } from "./validateForm.js";
import eye from "../../img/eye.svg";

export const Login = (props) => {
  const [passType, setPassType] = useState("password");

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validateLogin
  );

  function submit() {
    console.log("Submitted succesfully");
  }
  
  const [activeButton, setActiveButton] = useState(false);
  useEffect(() => {
    if (
      values.login &&
      values.password
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [values]);


  return (
    <div className="base-container">
      <div className="header">
        <h1>Вход</h1>
        <h6>Введите свои данные</h6>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              // className={`${errors.login && "inputError"}`}
              type="text"
              name="login"
              value={values.login}
              onChange={handleChange}
              placeholder="Email или номер телефона"
            />
          </div>
          <div className="form-group">
            <input
              // className={`${errors.password && "Error"}`}
              type={passType}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Пароль"
            />
            <img
              src={eye}
              onClick={() => {
                passType === "password"
                  ? setPassType("text")
                  : setPassType("password");
              }}
              alt="eye"
            />
          </div>
          <button
          disabled={activeButton ? "" : "disabled"}
          type="submit" 
          className={activeButton ? "activeBtn" : "btn"}
          >
            Войти
          </button>
        </form>
      </div>
      <div className="footer">
        <p>
          Нет аккаунта? <NavLink to="/register" >Зарегистрироваться</NavLink>
        </p>
      </div>
    </div>
  );
};
