import {
    MOVE_PLAYER
} from "../actions/moveActions";

const initialState = {
    position: {
        x: 50,
        y: 50
    }
};

export const playerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case MOVE_PLAYER:
            return {
                ...state,
                ...action.payload
            };
        default :
            return state
    }
};

