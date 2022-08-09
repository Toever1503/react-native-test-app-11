import axios from "axios";

let axiosInstance = null;
axiosInstance = axios.create({
    baseURL: 'http://3.38.125.53:8085/',
    headers: getHeaders()
})

//hook interceptor cai o day
axiosInstance.interceptors.request.use(config => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});

let headers = {
    'Content-Type': 'application/json'
}

function setHeaders(inputHeaders) {
    headers = inputHeaders;
}

function getHeaders() {
    return headers;
}

function getInstance() {
    if (axiosInstance !== null) {
        return axiosInstance;
    }
}

function get(endpointApiUrl, payLoad = {}) {
    return getInstance().get(endpointApiUrl, {
        params: payLoad
    })
}

function post(endpointApiUrl, payLoad = {}) {
    console.log('posting data; ', endpointApiUrl, payLoad, getInstance())
    return getInstance().post(endpointApiUrl, payLoad)
}

function put(endpointApiUrl, payLoad = {}) {
    return getInstance().put(endpointApiUrl, payLoad);
}

function patch(endpointApiUrl, payLoad = {}) {
    return getInstance().patch(endpointApiUrl, payLoad);
}

function del(endpointApiUrl, payLoad = {}) {
    return getInstance().delete(endpointApiUrl, payLoad);
}

export const Axios = {
    axiosInstance,
    getHeaders,
    setHeaders,
    get,
    post,
    put,
    del,
    patch
}