import store from "../store/store";

export const ADD_TILES = 'ADD_TILES';
export const ADD_ITEMS = 'ADD_ITEMS_TILES';
export const SET_FRAME_ARROW = 'SET_FRAME_ARROW';
export const SET_FRAME_PEAKS = 'SET_FRAME_PEAKS';
export const SET_FRAME_FLAMETHROWER = 'SET_FRAME_FLAMETHROWER';

export const dispatchTile = ( tiles ) => {
    store.dispatch( {
        type: ADD_TILES,
        payload: {
            tiles
        }
    } )
};

export const dispatchPeaks = ( frame ) => {
    store.dispatch( {
        type: SET_FRAME_PEAKS,
        payload: {
            frame
        }
    } )
};

export const dispatchArrow = ( frame ) => {
    store.dispatch( {
        type: SET_FRAME_ARROW,
        payload: {
            frame
        }
    } )
};

export const dispatchFlamethrower = ( frame ) => {
    store.dispatch( {
        type: SET_FRAME_FLAMETHROWER,
        payload: {
            frame
        }
    } )
};

export const dispatchItemTile = ( items ) => {
    store.dispatch( {
        type: ADD_ITEMS,
        payload: {
            items
        }
    } )
};
