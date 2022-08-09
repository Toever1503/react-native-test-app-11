import { Axios } from "./Axios";

function postQuestion(payload) {
    return Axios.post("questions", payload)
}

function getQuestion() {
    return Axios.get("questions")
}

function getQuestionById(id) {
    return Axios.get(`questions/${id}`)
}

function putQuestion(id, payload) { // get id from form-data
    return Axios.put(`questions/${id}`, payload, {
        header: {
            'Content-Type' : 'multipart/form-data'
        }
    })
}

function getMyQuestion(payload) {
    return Axios.get(`questions/user?page=${payload}&size=10&sort=id,desc`)
}

function getMyAnswer() {
    return Axios.get("questions/user/answered")
}

function deleteQuestionList(payload) {
    return Axios.del("questions/delete-list", payload)
}

function deleteMyQuestion(id) {
    return Axios.del(`questions/${id}`)
}

function getAllAskedUser() {
    return Axios.get("questions/asked/user")
}
function getDetailQuestion(questId){
    return Axios.get("questions/user/"+questId);
}

export const questionService = {
    postQuestion,
    getQuestion,
    putQuestion,
    getMyQuestion,
    getMyAnswer,
    deleteQuestionList,
    getAllAskedUser,
    getQuestionById,
    deleteMyQuestion,
    getDetailQuestion
}