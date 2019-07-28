import {
    GO_LEFT,
    GO_RIGHT
} from "../actions/actionTypes";

const initialState = {
    position: {
        x: 16,
        y: 32
    }
};

export const playerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GO_LEFT:
            console.log( 'go left' );
            break;
        case GO_RIGHT:
            console.log( 'go right' );
            break;
        default :
            return state
    }
};

