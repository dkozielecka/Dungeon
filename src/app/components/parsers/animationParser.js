import store from "../../../duck/store/store";
import flamethrower1
    from "../../../assets/img/items/flamethrower/flamethrower1.png";
import flamethrower2
    from "../../../assets/img/items/flamethrower/flamethrower2.png";
import flamethrower3
    from "../../../assets/img/items/flamethrower/flamethrower3.png";
import flamethrower4
    from "../../../assets/img/items/flamethrower/flamethrower4.png";
import arrow1 from "../../../assets/img/items/arrow/arrow1.png";
import arrow2 from "../../../assets/img/items/arrow/arrow2.png";
import arrow3 from "../../../assets/img/items/arrow/arrow3.png";
import arrow4 from "../../../assets/img/items/arrow/arrow4.png";
import peaks0 from "../../../assets/img/items/peaks/peaks0.png";
import peaks1 from "../../../assets/img/items/peaks/peaks1.png";
import peaks2 from "../../../assets/img/items/peaks/peaks2.png";
import peaks3 from "../../../assets/img/items/peaks/peaks3.png";

export const animationParser = ( value ) => {
    switch ( value ) {
        case 13: {
            switch ( store.getState().map.traps.flamethrower.frame ) {
                case 1: {
                    return flamethrower1
                }
                case  2: {
                    return flamethrower2
                }
                case 3: {
                    return flamethrower3
                }
                case 4: {
                    return flamethrower4
                }
                default: {
                    return flamethrower1
                }
            }
        }
        case 12: {
            switch ( store.getState().map.traps.arrow.frame ) {
                case 1: {
                    return arrow1
                }
                case  2: {
                    return arrow2
                }
                case 3: {
                    return arrow3
                }
                case 4: {
                    return arrow4
                }
                default: {
                    return arrow1
                }
            }
        }
        case 6: {
            switch ( store.getState().map.traps.peaks.frame ) {
                case 1: {
                    return peaks0
                }
                case  2: {
                    return peaks1
                }
                case 3: {
                    return peaks2
                }
                case 4: {
                    return peaks3
                }
                default: {
                    return peaks0
                }
            }
        }
        default: {
            return null
        }
    }
};
