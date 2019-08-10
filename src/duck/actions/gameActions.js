import store from "../store/store";

export const START_GAME = 'START_GAME';

export const dispatchStart = ( ready ) => {
    store.dispatch( {
        type: START_GAME,
        payload: {
            ready
        }
    })
};