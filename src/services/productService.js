import {Axios} from "./Axios";

function getAllProducts() {
    return Axios.get("products/public/get-all");
}

function getProductById(id) {
    return Axios.get(`products/public/${id}`);
}

function getReviewProductById(id) {
    return Axios.get(`reviews/product/${id}`);
}

function getReviewProductByFilter(payload) {
    return Axios.post(`reviews/filter`,payload);
}

function getReviewByOrderId(id) {
    return Axios.get(`reviews/my-reviews/${id}`);
}

function createProduct(payload) {
    return Axios.post("products", payload);
}

function updateProduct(id, payload) {
    return Axios.put(`products/${id}`, payload);
}

function deleteProduct(id) {
    return Axios.del(`products/${id}`);
}

function getLikeAndUnlike() {
    return Axios.get("products/like");
}

function getProductBySlug() {
    return Axios.get("products/slug");
}

function getProductByFilter(sort,price,size,payload,page) {
    return Axios.post(`products/public/filter?sort=${sort},${price}&size=${size}&page=${page}`, payload);
}

// function getProductByFilter(sort,price,payload) {
//     return Axios.post(`products/public/filter?sort=${sort},${price}`, payload);
// }

function getProductByCategory(id) {
    return Axios.get(`products/get-product-by-categoryId/${id}`);
}

function getFilterProduct(sort,price,size,payload,page) {
    return Axios.post(`products/public/filter?sort=${sort},${price}&size=${size}&page=${page}`, payload);
}

export const productService = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getLikeAndUnlike,
    getProductBySlug,
    getProductByFilter,
    getReviewProductById,
    getFilterProduct,
    getProductByCategory,
    getReviewProductByFilter,
    getReviewByOrderId
}