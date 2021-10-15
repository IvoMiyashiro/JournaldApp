import styled from "styled-components";
import { Link } from 'react-router-dom';

import { bps } from "../../styles/03-breakPoints";

import { ImageButtonSection } from "../forms/styles";

import { MdAddCircle } from 'react-icons/md';
import { VscEdit } from 'react-icons/vsc';
import { RiDeleteBin6Line } from 'react-icons/ri';

/* Jounald Card */
export const JournaldCardImg = styled.img`
    height: 100%;
    width: 100px;
    border-radius: 3px 0 0 3px;
    object-fit: cover;
    transition: .2s ease-in-out transform;
`;

export const JournaldCardStyled = styled.div`
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
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 90px;
    margin: 0 auto;
    min-width: 260px;
    padding: .45em;
    padding-bottom: 2.25em;
    position: relative;
    transition: .2s ease-in-out box-shadow;
    width: 85%;

    ${ bps.desktop } {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        height: 100px;
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
        transform: scale(.95);
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

export const JournaldCardSection = styled.section`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const JournaldCardButtonsSection = styled.section`
    display: flex;
    gap: 1em;
    margin-right: 1em;

    ${ bps.desktop } {
        margin-top: -2.75em;
        gap: 1.5em;
    }
`;

export const JournaldCardLinkButton = styled( Link )`

`;

export const EditIcon = styled( VscEdit )`
    font-size: 1.15rem;
    color: ${ props => props.theme.primary };
    border-radius: 4px;
    box-shadow:
        0 0px 0.3px rgba(0, 0, 0, 0.028),
        0 0px 0.7px rgba(0, 0, 0, 0.04),
        0 0px 1.4px rgba(0, 0, 0, 0.05),
        0 0px 2.5px rgba(0, 0, 0, 0.06),
        0 0px 4.6px rgba(0, 0, 0, 0.072),
        0 0px 11px rgba(0, 0, 0, 0.1)
    ;
    padding: .25em;
    position: absolute;
    bottom: 8px;

    :hover {
        transform: scale(1.05);
    }

    ${ bps.desktop } {
        right: 50px;
        top: 10px;
    }
`;

export const DeleteIcon = styled( RiDeleteBin6Line )`
    font-size: 1.15rem;
    color: red;
    border-radius: 4px;
    box-shadow:
        0 0px 0.3px rgba(0, 0, 0, 0.028),
        0 0px 0.7px rgba(0, 0, 0, 0.04),
        0 0px 1.4px rgba(0, 0, 0, 0.05),
        0 0px 2.5px rgba(0, 0, 0, 0.06),
        0 0px 4.6px rgba(0, 0, 0, 0.072),
        0 0px 11px rgba(0, 0, 0, 0.1)
    ;
    padding: .25em;
    position: absolute;
    bottom: 8px;
    left: 50px;

    :hover {
        transform: scale(1.05);
    }

    ${ bps.desktop } {
        right: 12px;
        top: 10px;
        left: auto;
    }
`;

export const JournaldCardDate = styled.div`
    display: flex;
    align-items: center;
    color: ${ props => props.theme.primary };
    font-size: .75rem;
    margin: 0;
`;

export const JournaldCardLastUpdate = styled.p`
    margin: 0;
    color: #c0c0c0;
    font-style: italic;
    margin-left: .5em;
`;

export const JournaldCardTitle = styled.h3`
    color: #000;
    cursor: pointer;
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
    max-width: 270px;

    ${ bps.desktop } {
        max-width: 800px;
    }
`;

/* Jounald Card */

/* Add entry Card */

export const AddJournaldCardStyled = styled( Link )`
    align-items: center;
    background: ${ props => props.theme.primary };
    border-radius: 4px;
    box-shadow:
    0 0px 2.2px rgba(0, 0, 0, 0.006),
    0 0px 5.3px rgba(0, 0, 0, 0.008),
    0 0px 10px rgba(0, 0, 0, 0.01),
    0 0px 17.9px rgba(0, 0, 0, 0.012),
    0 0px 33.4px rgba(0, 0, 0, 0.014),
    0 0px 80px rgba(0, 0, 0, 0.02)
    ;
    color: #fff;
    display: flex;
    height: 100px;
    justify-content: center;
    min-width: 260px;
    margin-top: 2em;
    text-decoration: none;
    transition: .2s ease-in-out transform;
    width: 85%;

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
    display: grid;
    justify-items: center;
    grid-template-rows: 120px 250px 50px;
    width: 275px;
    min-height: 430px;
    margin-top: 1em;

    ${ bps.desktop } {
        width: 300px;
    }
`;

export const EntryCardInfoSection = styled.section`
    margin-top: 1.5em;
    width: 90%;
`;

export const EntryCardButtonSection = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`;

export const EntryCardImg = styled.img`
    width: 90%;
    height: 120px;
    border-radius: 4px;
    object-fit: cover;
    margin-top: 1em;

    :after {  
        content: attr(alt);
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    :hover ${ ImageButtonSection } {
        display: block;
    }
`;

export const EntryCardDate = styled.small`
    margin: 0;
    color: ${ props => props.theme.primary };
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