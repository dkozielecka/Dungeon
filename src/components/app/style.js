import {
    MAP_HEIGHT,
    MAP_WIDTH,
    TILE
} from "../../config/constans";
import styled, { keyframes } from "styled-components";
import flag1 from "../../assets/img/items/flag/flag1.png"
import flag2 from "../../assets/img/items/flag/flag2.png"
import flag3 from "../../assets/img/items/flag/flag3.png"
import flag4 from "../../assets/img/items/flag/flag4.png"
import torch1 from "../../assets/img/items/torch/torch1.png"
import torch2 from "../../assets/img/items/torch/torch2.png"
import torch3 from "../../assets/img/items/torch/torch3.png"
import torch4 from "../../assets/img/items/torch/torch4.png"
import flamethrower1
    from "../../assets/img/items/flamethrower/flamethrower1.png"
import flamethrower2
    from "../../assets/img/items/flamethrower/flamethrower2.png"
import flamethrower3
    from "../../assets/img/items/flamethrower/flamethrower3.png"
import flamethrower4
    from "../../assets/img/items/flamethrower/flamethrower4.png"
import arrow1 from "../../assets/img/items/arrow/arrow1.png"
import arrow2 from "../../assets/img/items/arrow/arrow2.png"
import arrow3 from "../../assets/img/items/arrow/arrow3.png"
import arrow4 from "../../assets/img/items/arrow/arrow4.png"
import peaks0 from "../../assets/img/items/peaks/peaks0.png"
import peaks1 from "../../assets/img/items/peaks/peaks1.png"
import peaks2 from "../../assets/img/items/peaks/peaks2.png"
import peaks3 from "../../assets/img/items/peaks/peaks3.png"

import store from "../../duck/store/store"

export const Tile = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: relative;
`;

export const ItemTile = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y }px;
`;

const flagAnimation = keyframes`
    0% { 
      background-image: url(${ flag1 })
    }
    24% { 
      background-image: url(${ flag1 })
    }
    25% { 
      background-image: url(${ flag2 }) 
    }
    49%  { 
      background-image: url(${ flag2 }) 
    }
    50%  { 
      background-image: url(${ flag3 }) 
    }
    74%  { 
      background-image: url(${ flag3 })
    }
    75%  { 
      background-image: url(${ flag4 }) 
    }
    99%  { 
      background-image: url(${ flag4 })
    }
    100% { 
      background-image: url(${ flag1 })
    } 
  `;

export const Flag = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y }px;
  animation: ${ flagAnimation } 2s steps(5) infinite;
`;

const torchAnimation = keyframes`
    0% { 
      background-image: url(${ torch1 })
    }
    24% { 
      background-image: url(${ torch1 })
    }
    25% { 
      background-image: url(${ torch2 }) 
    }
    49%  { 
      background-image: url(${ torch2 }) 
    }
    50%  { 
      background-image: url(${ torch3 }) 
    }
    74%  { 
      background-image: url(${ torch3 })
    }
    75%  { 
      background-image: url(${ torch4 }) 
    }
    99%  { 
      background-image: url(${ torch4 })
    }
    100% { 
      background-image: url(${ torch1 })
    } 
  `;

export const Torch = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y }px;
  animation: ${ torchAnimation } 2s steps(5) infinite;
`;

export const Arrow = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y }px;
`;

export const Peaks = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y }px;
`;

export const Flamethrower = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  background-image: url(${ props => props.value });
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y }px;
`;

export const animationFrame = ( value ) => {
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

export const Map = styled.div`
  width: ${ MAP_WIDTH }px;
  height: ${ MAP_HEIGHT }px;
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
`;


