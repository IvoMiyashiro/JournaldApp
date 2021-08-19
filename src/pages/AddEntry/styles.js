import styled from "styled-components";
import { Link } from "react-router-dom";

import { bps } from "../../styles/03-breakPoints";

export const AddEntryScreen = styled.div`
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
    font-size: 2rem;
    color: ${ props => props.theme.secondary };
    margin: 0;
    text-align: center;

    ${ bps.desktop } {
        font-size: 3rem
    }
`;

export const FormSection = styled.section`
    margin-top: 1em;
`;

export const LinkR = styled( Link )`
    color: ${ props => props.theme.textColor };
    align-items: center;
    color: ${ props => props.theme.textColor };
    display: flex;
    font-size: .85rem;
    margin-right: 18em;
    margin-top: 1em;
    text-decoration: none;
`;

