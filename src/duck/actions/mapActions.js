import store from "../store/store";

export const ADD_TILES = 'ADD_TILES';

export const dispatchTile = ( tiles ) => {
    store.dispatch( {
        type: 'ADD_TILES',
        payload: {
            tiles: tiles
        }
    } )
};