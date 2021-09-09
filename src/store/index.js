import { createStore } from "redux";

import mainReducer from '../reducers/index';

const appStore = createStore(
    mainReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //para verlo en componente REDUX de Chrome
    );

export default appStore;