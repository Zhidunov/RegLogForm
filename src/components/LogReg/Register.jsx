import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../../useForm.js";
import InputMask from "react-input-mask";
import eye from "../../img/eye.svg";
import { setNewUser } from "../../LogPass.js";
import { Checked } from "../SuccessfulAnimation/Checked.jsx";

export const Register = (props) => {
  let [passType, setPassType] = useState("password");
  let [activeButton, setActiveButton] = useState(false);

  const {
    handleChangeWithValidate,
    handleSubmit,
    isSubmitting,
    values,
    errors,
  } = useForm(submitReg);

  function submitReg() {
    setNewUser(values);
  }

  useEffect(() => {
    let emtyErrors = [];
    for (let key in errors) {
      if (errors[key] === "") {
        emtyErrors.push(true);
      } else {
        emtyErrors.push(false);
      }
    }
    function check(element) {
      return element === true;
    }
    if (
      values.username &&
      values.nickname &&
      values.email &&
      values.tel &&
      values.password &&
      values.checkbox &&
      emtyErrors.every(check)
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [values]);

  if (isSubmitting) {
    return <Checked text={"Вы зарегистрированы"} path={"/"} />;
  }

  return (
    <div className="base-container">
      <div className="header">
        <h1>Регистрация</h1>
        <h6>Введите свои данные</h6>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <p
              className={`${values.username.length !== 0 && "placeholder"}`}
              data-name="Имя"
            ></p>
            <input
              className={`${errors.username && "inputError"}`}
              type="text"
              name="username"
              value={values.username}
              onChange={handleChangeWithValidate}
              placeholder="Имя"
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="form-group">
            <p
              className={`${values.nickname.length !== 0 && "placeholder"}`}
              data-name="Никнейм"
            ></p>
            <input
              className={`${errors.nickname && "inputError"}`}
              type="text"
              name="nickname"
              value={values.nickname}
              onChange={handleChangeWithValidate}
              placeholder="Никнейм"
            />
            {errors.nickname && <p className="error">{errors.nickname}</p>}
          </div>
          <div className="form-group">
            <p
              className={`${values.email.length !== 0 && "placeholder"}`}
              data-name="Email"
            ></p>
            <input
              className={`${errors.email && "inputError"}`}
              type="text"
              name="email"
              value={values.email}
              onChange={handleChangeWithValidate}
              placeholder="Email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <p
              className={`${values.tel.length !== 0 && "placeholder"}`}
              data-name="Телефон"
            ></p>
            <InputMask
              className={`${errors.tel && "inputMaskError"}`}
              mask="+7 (999) 999-99-99"
              name="tel"
              value={values.tel}
              onChange={handleChangeWithValidate}
              placeholder="Телефон"
            />
            {errors.tel && <p className="error">{errors.tel}</p>}
          </div>
          <div className="form-group">
            <p
              className={`${values.password.length !== 0 && "placeholder"}`}
              data-name="Пароль"
            ></p>
            <input
              className={`${errors.password && "Error"}`}
              type={passType}
              name="password"
              value={values.password}
              onChange={handleChangeWithValidate}
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
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="checkbox"
              onChange={handleChangeWithValidate}
            />
            <span></span>
            <p>Я даю свое согласие на обработку персональных данных</p>
          </div>
          <button
            disabled={activeButton ? "" : "disabled"}
            type="submit"
            className={activeButton ? "activeBtn" : "btn"}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
      <div className="footer">
        <p>
          Есть аккаунт? <NavLink to="/">Войти</NavLink>
        </p>
      </div>
    </div>
  );
};
