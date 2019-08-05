import store from "../store/store";

export const TICK = 'TICK';
export const ADD_TILES = 'ADD_TILES';
export const ADD_ITEMS = 'ADD_ITEMS_TILES';

export const dispatchTick = () => {
    store.dispatch({
        type: TICK
    })
};

export const dispatchTile = (tiles) => {
    store.dispatch({
        type: ADD_TILES,
        payload: {
            tiles
        }
    })
};

export const dispatchItemTile = (items) => {
    store.dispatch({
        type: ADD_ITEMS,
        payload: {
            items
        }
    })
};
