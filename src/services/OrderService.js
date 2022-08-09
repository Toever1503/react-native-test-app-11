import {Axios} from "./Axios";

const baseURL = 'order/';

function filterOrder(page, size, payload) {
    return Axios.post(`${baseURL}filter/?page=${page}&size=${size}&sort=id,desc`, payload);
}

function getAllOrder() {
    return Axios.get(`${baseURL}user`);
}

function getOrderById(id) {
    return Axios.get(`${baseURL}user/${id}`);
}

function changeOrderStatus(id, status) {
    return Axios.patch(`${baseURL}update-status/${id}?status=${status}`);
}

function updateOrderDeliveryCode(id, code) {
    return Axios.patch(`${baseURL}update-delivery-code/${id}?code=${code}`);
}

function cancelOrder(orderId) {
    return Axios.del(`${baseURL + orderId}`)
}

function postReview(formData){
    return Axios.post(`reviews`, formData,{
        headers: { 'Content-Type': 'application/form-data' }
    })
}

export const OrderService = {
    filterOrder,
    cancelOrder,
    changeOrderStatus,
    updateOrderDeliveryCode,
    postReview,
    getAllOrder,
    getOrderById
};