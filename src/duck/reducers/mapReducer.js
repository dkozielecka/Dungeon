import {
    ADD_ITEMS,
    ADD_TILES,
    SET_FRAME_FLAMETHROWER,
    SET_FRAME_PEAKS,
    SET_FRAME_ARROW
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
        case SET_FRAME_PEAKS: {
            return {
                ...state,
                traps: {
                    ...state.traps,
                    peaks: {
                        ...action.payload
                    }
                }
            }
        }
        case SET_FRAME_ARROW: {
            return {
                ...state,
                traps: {
                    ...state.traps,
                    arrow: {
                        ...action.payload
                    }
                }
            }
        }
        case SET_FRAME_FLAMETHROWER: {
            return {
                ...state,
                traps: {
                    ...state.traps,
                    flamethrower: {
                        ...action.payload
                    }
                }
            }
        }
        default :
            return state
    }
};
