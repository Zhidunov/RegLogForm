import React, { useState } from "react";
import { useForm } from "../../useForm.js";
import InputMask from "react-input-mask";
import { validateRegister } from "./validateRegister.js";
import eye from "../../img/eye.svg";

export const Register = (props) => {
  const [passType, setPassType] = useState("password");

  const { handleChangeWithValidate, handleChange, handleSubmit, values, errors, activeButton } = useForm(
    submit,
    validateRegister
  );

  function submit() {
    console.log("Submitted succesfully");
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
              className={`${
                errors.username && values.username.length !== 0 && "placeholder"
              }`}
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
              className={`${
                errors.nickname && values.nickname.length !== 0 && "placeholder"
              }`}
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
              className={`${
                errors.email && values.email.length !== 0 && "placeholder"
              }`}
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
              className={`${
                errors.tel && values.tel.length !== 0 && "placeholder"
              }`}
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
              className={`${
                errors.password && values.password.length !== 0 && "placeholder"
              }`}
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
            <input type="checkbox" name="checkbox" onChange={handleChangeWithValidate} />
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
          Есть аккаунт? <a href="#">Войти</a>
        </p>
      </div>
    </div>
  );
};
