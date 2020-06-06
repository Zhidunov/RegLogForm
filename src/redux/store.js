import { createStore, combineReducers } from "redux";
import { authReducer } from "./authReducer.js";
import { usersReducer } from "./usersReduser.js";

let redusers = combineReducers({
    auth: authReducer,
    users: usersReducer
})

export const store = createStore(redusers);