import styled, { keyframes } from "styled-components";
import flag1 from "../../../assets/img/items/flag/flag1.png";
import flag2 from "../../../assets/img/items/flag/flag2.png";
import flag3 from "../../../assets/img/items/flag/flag3.png";
import flag4 from "../../../assets/img/items/flag/flag4.png";
import { TILE } from "../../../config/constans";

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
  animation: ${ flagAnimation } 1s steps(5) infinite;
`;
