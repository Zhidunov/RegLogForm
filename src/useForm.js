import { useState, useEffect } from "react";

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    login: "",
    username: "",
    nickname: "",
    email: "",
    tel: "",
    password: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeWithValidate = (e) => {
    const { name, value, checked } = e.target;
    if (e.target.type !== "checkbox") {
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        checkbox: checked,
      });
    }

    console.log(value);

    validateOnChange(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetValues = () => {
    setIsSubmitting(false);
    setValues({
      login: "",
      username: "",
      nickname: "",
      email: "",
      tel: "",
      password: "",
      checkbox: false,
    });
    setErrors({errAuth: "Такого логина или пароля не существует. Попробуйте снова."});
  };

  const validateOnChange = (name, value) => {
    switch (name) {
      case "username":
        if (value === "") {
          setErrors({ ...errors, username: "" });
        } else if (/^[a-zA-Z]+$/.test(value)) {
          setErrors({ ...errors, username: "" });
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          setErrors({
            ...errors,
            username: "Имя должно состоять из латинских букв",
          });
        }
        break;

      case "nickname":
        if (value === "") {
          setErrors({ ...errors, nickname: "" });
        } else if (/^[a-zA-Z0-9]+$/.test(value)) {
          setErrors({ ...errors, nickname: "" });
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
          setErrors({
            ...errors,
            nickname: "Никнейм может состоять из латинских букв и чисел",
          });
        }
        break;

      case "email":
        if (value === "") {
          setErrors({ ...errors, email: "" });
        } else if (/\S+@\S+\.\S+/.test(value)) {
          setErrors({ ...errors, email: "" });
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setErrors({ ...errors, email: "Некорректно введен e-mail" });
        }
        break;

      case "tel":
        if (value === "") {
          setErrors({ ...errors, tel: "" });
        } else if (!value.includes("_")) {
          setErrors({ ...errors, tel: "" });
        } else if (value.includes("_")) {
          setErrors({
            ...errors,
            tel: 'Поле "Телефон" заполнено не полностью',
          });
        }
        break;

      case "password":
        if (value === "") {
          setErrors({ ...errors, password: "" });
        } else if (
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(
            value
          )
        ) {
          setErrors({ ...errors, password: "" });
        } else if (value.length < 8 || value.length > 16) {
          setErrors({ ...errors, password: "Пароль должен быть длиной минимум в 8 символов и максимум в 16" });
        } else if (
          !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(
            value
          )
        ) {
          setErrors({
            ...errors,
            password:
              "Пароль должен состоять из латинских букв разного регистра, цифр и специальных символов"
          });
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    callback();
  };


  return {
    handleChangeWithValidate,
    handleChange,
    handleSubmit,
    resetValues,
    isSubmitting,
    values,
    errors,
  };
};
