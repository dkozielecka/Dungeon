import store from "../store/store";
import { TILE } from "../../config/constans";

export const MOVE_PLAYER = 'MOVE_PLAYER';

export const movePlayer = ( direction ) => {
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