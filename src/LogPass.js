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
        if(obj.login === login && obj.password === password) {
            console.log("true");
            obj.isAuth = true;
            authUser = obj;
        }
        console.log("false");
    })
    debugger
    return authUser;
}