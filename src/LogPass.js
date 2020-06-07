let storage = [
  {
    login: "admin",
    username: "admin",
    nickname: "",
    email: "",
    tel: "",
    password: "12345",
    isAuth: false,
  },
];

export const auth = (login, password) => {
  let authUser = {};
  storage.forEach((obj) => {
    // Приведение телефона в базе к простому набору из 10 цифр без кода региона для упрощения сравнения:
    let fTel = obj.tel.replace(/\D/g, "").replace(/^7/, "");
    let fLogin = "";
    if (!login.includes("@") || !login.includes(".")) {
      // Если логин не email, то переводим его в цифровую запись:
      fLogin = login.replace(/\D/g, "");
    }

    if (fLogin.length >= 10 && fLogin.length < 12) {
      if (fLogin.length === 11) {
        // Удаляем первый символ (8 или 7 обычно):
        fLogin = fLogin.substr(1);
      }
    }

    if (
      (obj.login === login || obj.email === login || fLogin === fTel) &&
      obj.password === password
    ) {
      console.log("true");
      obj.isAuth = true;
      authUser = obj;
    }
  });
  return authUser;
};

export const setNewUser = ({
  login,
  username,
  nickname,
  email,
  tel,
  password,
}) => {
  let newUser = {
    login,
    username,
    nickname,
    email,
    tel,
    password,
    isAuth: false,
  };
  storage.push(newUser);
  console.log(storage);
};
