let Id = 0

export const mostrarAlert = (payload) => {
    payload.id= Id++;
    payload.status= "OK"
    let type = 'MostrarAlert';
    if (!payload.inputText) type = '';
    return { type: type, payload: payload };
};