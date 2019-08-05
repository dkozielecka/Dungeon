import {ADD_ITEMS, ADD_TILES, TICK} from "../actions/mapActions";

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

export const mapReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case TICK: {
            const prevFrames = Object.entries(state.traps);
            const nextFrames = prevFrames.map(([trap, {frame}]) => [trap, {frame: frame === 4 ? 1 : frame + 1}]);

            return {
                ...state,
                traps: Object.fromEntries(nextFrames)
            }
        }
        default :
            return state
    }
};
