import { attemptMove } from "../../duck/actions/moveActions";

const handleMovement = ( player ) => {

    const handleKeyDown = ( e ) => {
        switch ( e.key ) {
            case 'w':
            case 'ArrowUp':
                return attemptMove( 'UP' );
            case 's':
            case 'ArrowDown':
                return attemptMove( 'DOWN' );
            case 'a':
            case 'ArrowLeft':
                return attemptMove( 'LEFT' );
            case 'd':
            case 'ArrowRight':
                return attemptMove( 'RIGHT' );
            default:
                return null
        }
    };

    window.addEventListener( 'keyup', ( e ) => handleKeyDown( e ) );

    return player
};

export default handleMovement;