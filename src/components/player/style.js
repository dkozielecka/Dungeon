import styled from "styled-components";
import { TILE } from "../../config/constans";
import p1 from "../../assets/img/priest/p1.png"
import p2 from "../../assets/img/priest/p2.png"
import p3 from "../../assets/img/priest/p3.png"
import p4 from "../../assets/img/priest/p4.png"
import { keyframes } from "styled-components";

const idleAnimation = keyframes`
  0% {
    background-image: url(${ p1 });
} 
  25% {
    background-image: url(${ p2 });
}
  50% {
    background-image: url(${ p3 });
}
  75% {
    background-image: url(${ p4 });
}
  100% {
    background-image: url(${ p1 });
}
`;

export const Character = styled.div`
  width: ${ TILE.width }px;
  height: ${ TILE.height }px;
  position: absolute;
  top: ${ props => props.x }px;
  left: ${ props => props.y }px;
  background-image: url(${ p1 });
  animation: ${ idleAnimation } .2s linear infinite;
  background-size: 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
`;