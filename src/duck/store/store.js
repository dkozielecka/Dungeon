import { createStore } from "redux";
import gameReducer from "../reducers/gameReducer";

const store = createStore( gameReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;