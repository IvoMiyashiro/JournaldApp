import styled from "styled-components";

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
    margin-top: 2.5em;
`;