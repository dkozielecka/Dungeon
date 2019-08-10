import styled from "styled-components";
import arrow from "../../assets/img/interface/arrow.png"

export const Arrow = styled.div`
background-image: url(${arrow});
width: 50px;
height: 50px;
background-size: 100%;
background-repeat: no-repeat;
margin-right: 2rem;
opacity: 0;
&.active{
opacity: 1;
}
`;
