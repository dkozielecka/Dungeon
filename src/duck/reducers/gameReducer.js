import { START_GAME } from "../actions/gameActions";

const initialState = {
    isStart: false,
    sounds: false
};

export const gameReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case START_GAME: {
            return {
                ...state,
                isStart: action.payload
            }
        }
        default: {
            return state
        }
    }
};