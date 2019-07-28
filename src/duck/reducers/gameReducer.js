import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer'
import { mapReducer } from "./mapReducer";

const gameReducer = combineReducers( {
    player: playerReducer,
    map: mapReducer
} );

export default gameReducer;