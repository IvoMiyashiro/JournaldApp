import styled from "styled-components";
import { Link } from "react-router-dom";

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
    bottom: 1em;
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
    margin-top: .5em;
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

export const AddEntryFormStyled = styled.form`
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

export const ImageButtonSection = styled.section`
    position: absolute;
    display: none;
`;

export const SpinnerSection = styled.section`
    position: absolute;
    z-index: 5;
`;

export const SmallError = styled.small`
    position: absolute;
    color: red;
    left: 6px;
    bottom: -20px;
`;

export const ImageSection = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 1.5em;
    margin-bottom: 1em;

    :hover ${ ImageButtonSection } {
        display: block;
    }
`;


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
`;

export const TextArea = styled.textarea`
    font-family: 'Source Sans Pro';
    background: #E8F0FE;
    border-radius: 4px;
    border: none;
    height: 125px;
    margin-top: .25em;
    outline: none;
    padding: .75em;
    resize: none;
    margin-bottom: 2em;
`;

/* Add Entry Form */

/* Error Form */

export const FormErrorStyled = styled.div`
    width: 100%;
    border: 2px solid red;
    background: #FEF1F2;
    margin-bottom: .75em;
    border-radius: 4px;
`;

export const FormErrorBody = styled.p`
    color: red;
    margin: 0;
    font-size: .85rem;
    padding: .5em;
`;

/* Error Form */