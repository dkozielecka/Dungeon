import store from '../../duck/store/store'
import { movePlayer } from "../../duck/actions/moveActions";

const handleMovement = ( player ) => {

    const directionMove = ( direction ) => {
        store.dispatch( {
            type: 'MOVE_PLAYER',
            payload: {
                position: movePlayer( direction )
            }
        } )
    };

    const handleKeyDown = ( e ) => {
        switch ( e.key ) {
            case 'w':
            case 'ArrowUp':
                return directionMove( 'UP' );
            case 's':
            case 'ArrowDown':
                return directionMove( 'DOWN' );
            case 'a':
            case 'ArrowLeft':
                return directionMove( 'LEFT' );
            case 'd':
            case 'ArrowRight':
                return directionMove( 'RIGHT' );
            default:
                return null
        }
    };

    window.addEventListener( 'keydown', ( e ) => handleKeyDown( e ) );

    return player
};

export default handleMovement;