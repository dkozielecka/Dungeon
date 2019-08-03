import {
    ADD_ITEMS,
    ADD_TILES
} from "../actions/mapActions";

const initialState = {
    tiles: [],
    items: []
};

export const mapReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_TILES:
            return {
                ...state,
                ...action.payload
            };
        case ADD_ITEMS:
            return {
                ...state,
                ...action.payload
            };
        default :
            return state
    }
};
