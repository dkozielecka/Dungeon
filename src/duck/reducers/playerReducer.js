import { GO_LEFT } from "../actions/actionTypes";

const initialState = {
    position: {
        x: 0,
        y: 0
    }
};

export const playerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GO_LEFT:
            console.log( 'go left' );
            break;
        default :
            return state
    }
};

