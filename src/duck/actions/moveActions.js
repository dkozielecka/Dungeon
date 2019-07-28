import store from "../store/store";
import {
    MAP_HEIGHT,
    MAP_WIDTH,
    TILE
} from "../../config/constans";

export const MOVE_PLAYER = 'MOVE_PLAYER';

const observeBoundries = ( oldPos, newPos ) => {
    return ( newPos.y >= 0 && newPos.y <= MAP_WIDTH ) && ( newPos.x >= 0 && newPos.x <= MAP_HEIGHT ) ? newPos : oldPos
};

export const dispatchMove = ( direction ) => {
    const oldPos = store.getState().player.position;
    store.dispatch( {
        type: 'MOVE_PLAYER',
        payload: {
            position: observeBoundries( oldPos, movePlayer( direction ) )
        }
    } )
};

const movePlayer = ( direction ) => {
    const oldPos = store.getState().player.position;
    switch ( direction ) {
        case 'DOWN':
            return {
                x: oldPos.x + TILE.width,
                y: oldPos.y
            };
        case 'UP' :
            return {
                x: oldPos.x - TILE.width,
                y: oldPos.y
            };
        case 'RIGHT' :
            return {
                x: oldPos.x,
                y: oldPos.y + TILE.height
            };
        case 'LEFT' :
            return {
                x: oldPos.x,
                y: oldPos.y - TILE.height
            };
        default:
            return oldPos
    }
};