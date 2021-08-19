import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate( 0deg );
    }

    100% {
        transform: rotate( 360deg );
    }
`;

export const SpinnerStyled = styled.div`
    border: 4px solid rgba( 0, 0, 0, .1 );
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border-left-color: ${ props => props.color };

    animation: ${spin} .5s linear infinite;
`;