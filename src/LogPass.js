let storage = [
        {
            login: "admin",
            username: "admin",
            nickname: "",
            email: "",
            tel: "",
            password: "12345",
            isAuth: false,
          }
    ];

export const auth = (login, password) => {
    let authUser = {};
    storage.forEach((obj) => {
        if((obj.login === login || obj.email === login || obj.tel === login) && obj.password === password) {
            console.log("true");
            obj.isAuth = true;
            authUser = obj;
        }
    })
    return authUser;
}

export const setNewUser = ({login, username, nickname, email, tel, password}) => {
    let newUser = {
        login, username, nickname, email, tel, password, isAuth: false
    };
    storage.push(newUser);
    console.log(storage);
}