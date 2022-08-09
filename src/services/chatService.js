import {Axios} from "./Axios";

function createChatRoom() {
    return Axios.get('chat/createChatRoom')
}

function sendChatMessage(payload) {
    return Axios.post('chat/sendChatMessage', payload);
}

function getAllChatRoomMessage(id) {
    return Axios.get(`chat/getAllChatRoomMessage/${id}`)
}

export const chatService = {
    createChatRoom,
    sendChatMessage,
    getAllChatRoomMessage
};