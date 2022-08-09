import {Axios} from "./Axios";

function getAllUserNotifications() {
    return Axios.get(`notifications/user/getAll?size=20&sort=createdDate,desc`);
}

function getAllUserNotificationsPaging(payload) {
    return Axios.get(`notifications/user/getAll?page=${payload}&size=20&sort=createdDate,desc`);
}

function getUserNotificationsDetailView(payload) {
    return Axios.get(`notifications/increase-view/${payload}`);
}

function getUserNotificationsDetail(payload) {
    return Axios.get(`notifications/user/${payload}`);
}

function markAllRead() {
    return Axios.get('notifications/mark-all-read');
}

export const notificationService = {
    getAllUserNotifications,
    markAllRead,
    getAllUserNotificationsPaging,
    getUserNotificationsDetail,
    getUserNotificationsDetailView
};