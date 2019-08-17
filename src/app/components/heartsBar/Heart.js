import styled, { keyframes } from "styled-components";
import heart from "../../../assets/img/interface/heart.png"

const shakeHeart = keyframes`
    0% { 
    left: 0;
    }
    24% { 
    left: 0;
    }
    25% { 
    left: 5px;
    }
    49%  { 
    left: 5px;
    }
    50%  { 
    left: 0px;
    }
    74%  { 
    left: 0px;
    }
    75%  { 
    left: -5px;
    }
    99%  { 
    left: -5px;
    }
    100% { 
    left: 0px;
    } 
`


export const Heart = styled.div`
display: inline-flex;
position: relative;
background-image: url(${ heart });
background-size: 100%;
background-repeat: no-repeat;
opacity: ${ ( props ) => !props.active ? 1 : 0.5 };
height: 30px;
width: 30px;
margin-right: 5px;
animation: ${ (props) => props.active ? shakeHeart : null} .3s steps(5) 4;
`;

