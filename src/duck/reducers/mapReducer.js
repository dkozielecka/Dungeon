import {
    ADD_ITEMS_TILES,
    ADD_TILES
} from "../actions/mapActions";

const initialState = {
    tiles: [],
    itemsTiles: []
};

export const mapReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_TILES:
            return {
                ...state,
                ...action.payload
            };
        case ADD_ITEMS_TILES:
            return {
                ...state,
                ...action.payload
            };
        default :
            return state
    }
};
