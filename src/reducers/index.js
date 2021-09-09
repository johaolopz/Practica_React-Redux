const initialState = [];

const oneReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MostrarAlert': return state[0] = action.payload;
        default: return state[0] = {inputText: 'Error de Action.!!!', status:'Error', id:0};
    }
}

export default oneReducer;