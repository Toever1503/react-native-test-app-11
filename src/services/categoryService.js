import {Axios} from "./Axios";

function getAllCategory() {
    return Axios.get(`categories/public/get-all-categories`);
}

function getCategoriesSlug(payload) {
    return Axios.get(`categories/public/${payload}`)
}

function getFilterIndustry(payload) {
    return Axios.get(`/industries/public/detail-industry/${payload}`);
}

function getFilterData(){
    return Axios.get(`products/public/get-filter-data`);
}

export const categoryService = {
    getAllCategory,
    getCategoriesSlug,
    getFilterIndustry,
    getFilterData
};