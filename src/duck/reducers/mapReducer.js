import { ADD_TILES } from "../actions/mapActions";

const initialState = {
    tiles: []
};

export const mapReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_TILES:
            return {
                ...state,
                ...action.payload
            };
        default :
            return state
    }
};
