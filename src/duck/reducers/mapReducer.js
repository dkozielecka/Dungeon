import {
    ADD_ITEMS,
    ADD_TILES
} from "../actions/mapActions";

const initialState = {
    tiles: [],
    items: [],
    traps: {
        flamethrower: {
            frame: 1
        },
        arrow: {
            frame: 1
        },
        peaks: {
            frame: 1
        }
    }
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
