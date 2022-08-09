import {Axios} from "./Axios";

function ForgotPassword(payload) {
    return Axios.post("users/forget-password", payload)
}

function SetPassword(payload) {
    return Axios.post("users/set-password", payload)
}

function ChangePassword(payload) {
    return Axios.post("users/change-password", payload)
}

export const passwordService = {
    ForgotPassword,
    SetPassword,
    ChangePassword
}