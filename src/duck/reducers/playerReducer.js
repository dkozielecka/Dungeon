import {
    MOVE_PLAYER
} from "../actions/moveActions";

const initialState = {
    position: {
        x: 16,
        y: 32
    }
};

export const playerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case MOVE_PLAYER:
            return {
                ...action.payload
            };
        default :
            return state
    }
};

