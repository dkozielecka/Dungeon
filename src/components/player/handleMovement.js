import { dispatchMove } from "../../duck/actions/moveActions";

const handleMovement = ( player ) => {

    const handleKeyDown = ( e ) => {
        switch ( e.key ) {
            case 'w':
            case 'ArrowUp':
                return dispatchMove( 'UP' );
            case 's':
            case 'ArrowDown':
                return dispatchMove( 'DOWN' );
            case 'a':
            case 'ArrowLeft':
                return dispatchMove( 'LEFT' );
            case 'd':
            case 'ArrowRight':
                return dispatchMove( 'RIGHT' );
            default:
                return null
        }
    };

    window.addEventListener( 'keydown', ( e ) => handleKeyDown( e ) );

    return player
};

export default handleMovement;