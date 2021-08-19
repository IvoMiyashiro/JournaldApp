import styled from "styled-components";
import {
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';

import { bps } from "../../styles/03-breakPoints";

export const DashboardScreen = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    margin-top: -70px;
    max-width: 1080px;
    padding-top: 90px;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: ${ props => props.theme.secondary };
    margin: 0;
    text-align: center;

    ${ bps.desktop } {
        font-size: 3.5rem
    }
`;

export const SearchbarSection = styled.section`
    margin: .5em auto;
    margin-bottom: 2em;
    width: 100%;
`;

export const JournaldCardsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
`;

export const RightButton = styled( FaChevronRight )`
    color: ${ props => props.theme.primary };
    cursor: pointer;
    margin-top: .35em;
`;

export const LeftButton = styled( FaChevronLeft )`
    color: ${ props => props.theme.primary };
    cursor: pointer;
    margin-top: .35em;
   
`;

export const InputSelectSection = styled.section`
    align-self: flex-end;
    display: flex;
    margin: 0 auto;
    width: 85%;
    font-size: .85rem;
    color: black;
`;

export const Label = styled.label`
    padding: 0 .5em;
    border-radius: 4px;
    background: white;
    color: black;
    /* color: ${ props => props.theme.textColor };
    border: 2px solid ${ props => props.theme.primary }; */
`;