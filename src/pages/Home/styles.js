import styled from "styled-components";
import { bps } from '../../styles/03-breakPoints';

export const HomeScreen = styled.div`
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin-top: -70px;
`;

export const HomeTitle = styled.h1`
    color: ${ props => props.theme.secondary };
    font-size: 3rem;
    margin: 0;
    text-align: center;

    ${ bps.desktop } {
        font-size: 4rem
    }

`;

export const HomeSubtitle = styled.h3`
    color: ${ props => props.theme.textColor };
    font-weight: normal;
    margin: 1.25em 0;
    text-align: center;
`