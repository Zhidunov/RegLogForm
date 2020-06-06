const initialState = {
    users: [
            {
                id: 0,
                login: "admin",
                username: "admin",
                nickname: "admin",
                email: "admin@admin.ru",
                tel: "+7(999)999-99-99",
                password: "12345",
            }
        ]
};

export const usersReducer = (state = initialState, action) => {
    return state;
}