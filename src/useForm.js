import { useState, useEffect } from "react";

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    nickname: "",
    email: "",
    tel: "",
    password: "",
    btnIsActive: false,
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [activeButton, setActiveButton] = useState(false);

  const handleChangeWithValidate = (e, callback) => {
    const { name, value, checked } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (e.target.type === "checkbox") {
      setValues({
        ...values,
        btnIsActive: checked,
      });
    }

    console.log(value);

    validateOnChange(name, value);
  };

  const handleChange = (e, callback) => {
    const { name, value, checked } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (e.target.type === "checkbox") {
      setValues({
        ...values,
        btnIsActive: checked,
      });
    }
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
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, values]);

  useEffect(() => {
    if (
      values.username &&
      values.nickname &&
      values.email &&
      values.tel &&
      values.password &&
      values.btnIsActive
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [values]);

  return {
    handleChangeWithValidate,
    handleChange,
    handleSubmit,
    values,
    errors,
    activeButton,
  };
};
