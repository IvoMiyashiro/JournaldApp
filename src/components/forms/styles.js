import styled from "styled-components";
import { Link } from "react-router-dom";

import { BsCardImage } from 'react-icons/bs';

import { bps } from "../../styles/03-breakPoints";

const commun = `
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
    padding: 1.5em 1em;
    width: 100%;
`;

/* Login / Signup */

export const Form = styled.form`
    ${commun}
    flex-direction: column;
    max-width: 275px;
`;

export const ForgetPassword = styled( Link )`
    color: #000;
    cursor: pointer;
    font-size: .85rem;
    margin: 0;
    margin-bottom: 1em;
    margin-left: .25em;
    margin-top: .5em;
    text-decoration: none;
`;

export const InputsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.25em;
`;

export const ButtonContainer = styled.div`
    margin-top: 2em;
`;

export const ButtonsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const Error = styled.small`
    background: #FEF1F2;
    border-radius: 4px;
    border: 2px solid red;
    color: red;
    font-size: .85rem;
    margin-bottom: 2em;
    padding: 0.5em;
`;

/* Login / Signup */

/* Add Entry Form */

export const AddEntryForm_ = styled.form`
    ${ commun };
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    width: 100%;
    max-width: 275px;
    margin-bottom: 4em;

    ${ bps.desktop } {
        max-width: 800px;
    } 
`;

export const ImageSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #f0f0f0;
    width: 100%;
    height: 100px;
    border-radius: 4px;

    ${ bps.desktop } {
        height: 365px;
        width: 150px;
    }
`;

export const AddImageButton = styled.button`
    border: none;
    background: none;
    color: ${ props => props.theme.primary };
    cursor: pointer;
`;

export const AddIcon = styled( BsCardImage )`
    font-size: 2rem;
`;

export const AddImageText = styled.h3`
    margin: 0;
    font-size: 1rem;
    color: ${ props => props.theme.primary };
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextArea = styled.textarea`
    background: #E8F0FE;
    border-radius: 4px;
    border: none;
    height: 250px;
    margin-bottom: .5em;
    margin-top: .25em;
    outline: none;
    padding: .75em;
    resize: none;
    width: 250px;
`;

/* Add Entry Form */