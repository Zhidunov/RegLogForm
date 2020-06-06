import React from "react";

export const Login = (props) => {

    return (
      <div className="base-container">
        <div className="header">
            <h1>Вход</h1>
            <h6>Введите свои данные</h6>
        </div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <input type="email" name="email" placeholder="Email или номер телефона" />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Пароль" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Войти
          </button>
          <p>Нет аккаунта? <a href="#">Зарегистрироваться</a></p>
        </div>
      </div>
    );
  }
