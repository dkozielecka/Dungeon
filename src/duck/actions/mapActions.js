import store from "../store/store";

export const ADD_TILES = 'ADD_TILES';
export const ADD_ITEMS_TILES = 'ADD_ITEMS_TILES';

export const dispatchTile = ( tiles ) => {
    store.dispatch( {
        type: ADD_TILES,
        payload: {
            tiles
        }
    } )
};

export const dispatchItemTile = ( itemsTiles ) => {
    store.dispatch( {
        type: ADD_ITEMS_TILES,
        payload: {
            itemsTiles
        }
    } )
};
