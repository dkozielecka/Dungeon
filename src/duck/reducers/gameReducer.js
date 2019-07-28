import { combineReducers } from 'redux';
import { playerReducer } from './playerReducer'

const gameReducer = combineReducers( {player: playerReducer} );

export default gameReducer;