import styled, { keyframes } from "styled-components";
import torch1 from "../../../assets/img/items/torch/torch1.png";
import torch2 from "../../../assets/img/items/torch/torch2.png";
import torch3 from "../../../assets/img/items/torch/torch3.png";
import torch4 from "../../../assets/img/items/torch/torch4.png";
import { TILE } from "../../../config/constans";

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
  animation: ${ torchAnimation } 1s steps(5) infinite;
`;
