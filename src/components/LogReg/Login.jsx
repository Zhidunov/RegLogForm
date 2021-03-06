import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useForm } from "../../useForm.js";
import eye from "../../img/eye.svg";
import { Checked } from "../SuccessfulAnimation/Checked.jsx";

export const Login = (props) => {
  let [passType, setPassType] = useState("password");

  const { handleChange, handleSubmit, resetValues, values, errors } = useForm(
    submit
  );

  function submit() {
    let authUser = props.login(values.login, values.password);
    function check() {
      if (!authUser) {
        resetValues();
      }
    }
    check();
  }

  const [activeButton, setActiveButton] = useState(false);
  useEffect(() => {
    if (values.login && values.password) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [values]);

  if (props.isAuth) {
    return <Checked text={"Вы авторизованы"} path={"/main"} />;
  }

  return (
    <div className="base-container">
      <div className="header">
        <h1>Вход</h1>
        <h6>Введите свои данные</h6>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <p
              className={`${values.login.length !== 0 && "placeholder"}`}
              data-name="Email или номер телефона"
            ></p>
            <input
              type="text"
              name="login"
              value={values.login}
              onChange={handleChange}
              placeholder="Email или номер телефона"
            />
          </div>
          <div className="form-group">
            <p
              className={`${values.password.length !== 0 && "placeholder"}`}
              data-name="Пароль"
            ></p>
            <input
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
          {errors.errAuth && <p className="error">{errors.errAuth}</p>}
        </form>
      </div>
      <div className="footer">
        <p>
          Нет аккаунта? <NavLink to="/register">Зарегистрироваться</NavLink>
        </p>
      </div>
    </div>
  );
};
