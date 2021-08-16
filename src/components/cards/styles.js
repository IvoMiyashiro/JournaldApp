import styled from "styled-components";
import { Link } from 'react-router-dom';

import { bps } from "../../styles/03-breakPoints";

import { MdAddCircle } from 'react-icons/md';

/* Jounald Card */

export const JournaldCardImg = styled.img`
    height: 100%;
    width: 100px;
    border-radius: 3px 0 0 3px;
    transition: .2s ease-in-out transform;
`;

export const JournaldCardStyled = styled(Link)`
    background: #fff;
    border-radius: 4px;
    box-shadow:
    0 0px 2.2px rgba(0, 0, 0, 0.006),
    0 0px 5.3px rgba(0, 0, 0, 0.008),
    0 0px 10px rgba(0, 0, 0, 0.01),
    0 0px 17.9px rgba(0, 0, 0, 0.012),
    0 0px 33.4px rgba(0, 0, 0, 0.014),
    0 0px 80px rgba(0, 0, 0, 0.02)
    ;
    display: flex;
    flex-direction: column;
    height: 100px;
    margin: 0 auto;
    min-width: 260px;
    padding: .45em;
    text-decoration: none;
    transition: .2s ease-in-out box-shadow;
    width: 85%;

    ${ bps.desktop } {
        flex-direction: row;
        align-items: center;
        padding: 0;
    }

    :hover {
        box-shadow:
        0 0px 0.3px rgba(0, 0, 0, 0.028),
        0 0px 0.7px rgba(0, 0, 0, 0.04),
        0 0px 1.4px rgba(0, 0, 0, 0.05),
        0 0px 2.5px rgba(0, 0, 0, 0.06),
        0 0px 4.6px rgba(0, 0, 0, 0.072),
        0 0px 11px rgba(0, 0, 0, 0.1)
        ;
        transition: .2s ease-in-out box-shadow;
    }

    :hover ${ JournaldCardImg } {
        transform: scale(.9);
        transition: .2s ease-in-out transform;
    }
`;

export const JournaldCardImgSection = styled.section`
    display: none;
    height: 100%;

    ${ bps.desktop } {
        display: block;
    }
`;

export const JournaldCardInfoSection = styled.section`
    max-width: 750px;
    padding: .25em;

    ${ bps.desktop } {
        margin-left: 1.25em;
    }
`;

export const JournaldCardDate = styled.p`
    color: ${ props => props.theme.primary };
    font-size: .85rem;
    margin: 0;
`;

export const JournaldCardTitle = styled.h3`
    color: #000;
    font-size: 1.25rem;
    margin: .25em 0;
    margin-top: 0;
`;

export const JournaldCardText = styled.p`
    color: #000;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

/* Jounald Card */

/* Add entry Card */

export const AddJournaldCardStyled = styled( Link )`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100px;
    min-width: 260px;
    width: 85%;
    background: ${ props => props.theme.primary };
    box-shadow:
    0 0px 2.2px rgba(0, 0, 0, 0.006),
    0 0px 5.3px rgba(0, 0, 0, 0.008),
    0 0px 10px rgba(0, 0, 0, 0.01),
    0 0px 17.9px rgba(0, 0, 0, 0.012),
    0 0px 33.4px rgba(0, 0, 0, 0.014),
    0 0px 80px rgba(0, 0, 0, 0.02)
    ;
    border-radius: 4px;
    text-decoration: none;
    transition: .2s ease-in-out transform;

    :hover {
        transform: scale(.97);
        transition: .2s ease-in-out transform;
    }
`;

export const AddJournaldTitle = styled.h3`
    font-size: 1.5rem;
`;

export const AddJournaldIcon = styled( MdAddCircle )`
    font-size: 1.25rem;
    margin-right: .5em;
    margin-top: .1em;
`;

/* Add entry Card */

/* Entry Card */

export const EntryCardStyled = styled.div`
    background: #fff;
    border-radius: 6px;
    box-shadow:
    0 0px 0.6px rgba(0, 0, 0, 0.02),
    0 0px 1.3px rgba(0, 0, 0, 0.028),
    0 0px 2.5px rgba(0, 0, 0, 0.035),
    0 0px 4.5px rgba(0, 0, 0, 0.042),
    0 0px 8.4px rgba(0, 0, 0, 0.05),
    0 0px 20px rgba(0, 0, 0, 0.07)
    ;
    display: flex;
    flex-direction: column;
    padding: 1.5em 1em;
    width: 100%;
    max-width: 300px;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
`;

export const EntryCardInfoSection = styled.section`
    margin-top: 1em;
`;

export const EntryCardButtonSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5em;

`;

export const EntryCardImg = styled.img`
    width: 100%;
    height: 120px;
    border-radius: 4px;
    object-fit: cover;
`;

export const EntryCardDate = styled.small`
    margin: 0;
    color: ${ props => props.theme.primary }
`;

export const EntryCardTitle = styled.h2`
    align-self: flex-start;
    margin: 0;
`;

export const EntryCardText = styled.p`
    margin: .5em 0;
    margin-bottom: 2em;
`;

/* Entry Card */