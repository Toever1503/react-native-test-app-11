import {Axios} from "./Axios";

function postLogin(payLoad) {
    return Axios.post('users/login', payLoad);
}

function doSignUp(payload) {
    return Axios.post('users/signup', payload);
}

function getMyProfile() {
    return Axios.get('users/my-profile');
}

function getMyAvatar() {
    return Axios.get('users/get-my-avatar');
}

function updateMyAvatar(payload) {
    return Axios.put('users/update-profile/avatar', payload);
}

function updateMyProfile(payload) {
    return Axios.put('users/my-profile/update', payload);
}

function getBanned() {
    return Axios.get(`options/get-options-by-key?key=homepage_setting`);
}

export const authService = {
    doSignUp,
    postLogin,
    getMyProfile,
    updateMyProfile,
    getMyAvatar,
    updateMyAvatar,
    getBanned
};