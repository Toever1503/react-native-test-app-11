// export const socketService = new WebSocket(`ws://3.38.125.53:8081/socket?Authorization=Bearer_${localStorage.getItem('token')}`);
const initConnection = () => {
    const connection = new WebSocket(`ws://3.38.125.53:8085/socket?Authorization=Bearer_${localStorage.getItem('token')}`);
    return connection;
}

export const socketService = {
    initConnection,
};


