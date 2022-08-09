import {Axios} from "./Axios";

function getAddress() {
    return Axios.get('users/my-addresses');
}

function getProvinces() {
    return Axios.get('addresses/provinces');
}

function getAllDistrict(payload) {
    return Axios.get(`addresses/getAllDistrict/${payload}`);
}

function getAllWards(provinceId, districtId) {
    return Axios.get(`addresses/getAllWards/${provinceId}/${districtId}`);
}

function addMyAddress(payload) {
    return Axios.post(`users/my-addresses`, payload);
}

function setMainAddress(id) {
    return Axios.patch(`users/my-addresses/main/${id}`);
}

function deleteAddress(id) {
    return Axios.del(`users/my-addresses/${id}`);
}

function updateAddress(id, payload) {
    return Axios.put(`users/my-addresses/${id}`, payload);
}

export const addressService = {
    getAddress,
    getProvinces,
    getAllDistrict,
    getAllWards,
    addMyAddress,
    setMainAddress,
    deleteAddress,
    updateAddress
};