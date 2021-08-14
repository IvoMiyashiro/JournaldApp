import styled from "styled-components";

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