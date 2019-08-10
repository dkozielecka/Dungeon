import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer'
import { mapReducer } from "./mapReducer";
import { gameReducer } from "./gameReducer";

const mainReducer = combineReducers( {
    player: playerReducer,
    map: mapReducer,
    game: gameReducer
} );

export default mainReducer;