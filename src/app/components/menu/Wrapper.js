import styled from "styled-components";
import bg from "../../../assets/img/interface/bg.jpg"

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=VT323&display=swap');
height: 100vh;
width: 100vw;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
font-family: 'VT323',serif;
background-image: url(${ bg });
`;
