import {
    dispatchArrow,
    dispatchFlamethrower,
    dispatchPeaks
} from "../../duck/actions/mapActions";

export const requestAnimationArrow = ( value ) => {
    if ( value === 4 ) {
        return dispatchArrow( 1 )
    } else {
        return setTimeout( () => dispatchArrow( requestAnimationArrow( value + 1 ) ), 500 )

    }
};
export const requestAnimationPeaks = ( value ) => {
    if ( value === 4 ) {
        return dispatchPeaks( 1 )
    } else {
        return setTimeout( () => dispatchPeaks( requestAnimationPeaks( value + 1 ) ), 500 )
    }
};
export const requestAnimationFlamethrower = ( value ) => {
    if ( value === 4 ) {
        return dispatchFlamethrower( 1 )
    } else {
        return setTimeout( () => dispatchFlamethrower( requestAnimationFlamethrower( value + 1 ) ), 500 )
    }
};