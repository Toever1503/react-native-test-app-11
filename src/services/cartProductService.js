import {Axios} from "./Axios";

function getCarts() {
    return Axios.get('carts');
}

function addToCarts(payload) {
    return Axios.post(`carts`,payload);
}

function upDateOption(payload) {
    return Axios.post(`carts`,payload);
}

function upDateQuantity(id,payload) {
    return Axios.put(`carts/change-quantity/${id}`,payload);
}

function delCartProduct(idCart,idSku){
    return Axios.del(`carts/sku/${idCart}/${idSku}`);
}

function likeProduct(payload) {
    return Axios.get('/products/like',payload)
}

function orderProduct(payload) {
    return Axios.post('/order',payload)
}

function postOrderId(payload) {
    return Axios.post(`/transaction/checkout?id=${payload.id}&url=${payload.url}`);
}

function delListCartProduct(payload){
    return Axios.del(`carts/delete-list`,payload);
}

export const cartProductService = {
    getCarts,
    upDateQuantity,
    upDateOption,
    delCartProduct,
    likeProduct,
    orderProduct,
    delListCartProduct,
    postOrderId,
    addToCarts
};