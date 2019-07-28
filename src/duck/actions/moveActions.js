import store from "../store/store";
import {
    MAP_HEIGHT,
    MAP_WIDTH,
    TILE
} from "../../config/constans";

export const MOVE_PLAYER = 'MOVE_PLAYER';

const observeBlocks = ( oldPos, newPos ) => {
    const { tiles } = store.getState().map;
    const x = newPos.x / TILE.height;
    const y = newPos.y / TILE.width;
    const nextTile = tiles[ x ][ y ];
    return nextTile === 1
};

const observeBoundries = ( oldPos, newPos ) => {
    return ( newPos.y >= 0 && newPos.y <= MAP_WIDTH ) && ( newPos.x >= 0 && newPos.x <= MAP_HEIGHT ) ? newPos : oldPos
};

const dispatchMove = ( newPos ) => {
    store.dispatch( {
        type: 'MOVE_PLAYER',
        payload: {
            position: newPos
        }
    } )
};

const movePlayer = ( oldPos, direction ) => {
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

export const attemptMove = ( direction ) => {
    const oldPos = store.getState().player.position;
    const newPos = movePlayer( oldPos, direction );

    if ( observeBoundries( oldPos, newPos ) && observeBlocks( oldPos, newPos ) ) {
        dispatchMove( newPos )
    }
};