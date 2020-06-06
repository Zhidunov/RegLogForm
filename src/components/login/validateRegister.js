export const validateRegister = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = 'Заполните поле "Имя"';
  } else if (!/^[a-zA-Z]+$/.test(values.username)) {
    errors.username = "Имя должно состоять из латинских букв";
  }
  if (!values.nickname) {
    errors.nickname = 'Заполните поле "Никнейм"';
  } else if (!/^[a-zA-Z0-9]+$/.test(values.nickname)) {
    errors.nickname = "Никнейм может состоять из латинских букв и чисел";
  }
  if (!values.email) {
    errors.email = 'Заполните поле "Email"';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Некорректно введен e-mail";
  }
  if (!values.tel) {
    errors.tel = 'Заполните поле "Телефон"';
  } else if (values.tel.includes("_")) {
    errors.tel = 'Поле "Телефон" заполнено не полностью';
  }

  if (!values.password) {
    errors.password = 'Заполните поле "Пароль"';
  } else if (
    !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Пароль должен состоять из букв латинского алфавита разного регистра, цифр и специальных символов. Длина 8-16 символов.";
  }

  // if(!values.checked){

  // }

  return errors;
};