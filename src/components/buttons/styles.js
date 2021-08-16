import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

import { BsCardImage } from 'react-icons/bs';

const common = `
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    font-family: 'Source Sans Pro';
    font-weight: bold;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
`;

/* Primary / Secondary Buttons */

export const Button = styled.button`
    ${ common }
    background-color: ${ props => props.theme.primary };
    border: 2px solid ${ props => props.theme.primary };
    color: #fff;
    font-size: ${ props => props.fontSize };
    height: ${ props => props.height };
    width: ${ props => props.width };
`;

export const ButtonOutline = styled.button`
    ${ common }
    background-color: transparent;
    border: 2px solid ${ props => props.theme.primary };
    color: ${ props => props.theme.primary };
    font-size: ${ props => props.fontSize };
    height: ${ props => props.height };
    transition: .2s ease-in-out;
    width: ${ props => props.width };

    :hover {
        background: ${props => props.theme.primary };
        color: #fff;
        transition: .2s ease-in-out;
    }
`;

export const Link = Button.withComponent( LinkRouter );
export const LinkOutline = ButtonOutline.withComponent( LinkRouter );

/* Primary / Secondary Buttons */

/* Google Button */

export const GoogleBtn = styled.button`
    font-family: 'Roboto';
    display: flex;
    align-items: center;
    width: ${ props => props.width };
    height: ${ props => props.height };
    border: none;
    background: #1A8BF6;
    padding: 0;
    padding-left: .1em;
    cursor: pointer;
    border-radius: 4px;
`;

export const GoogleLogo = styled.img`
    width: 22px;
    background: #fff;
    padding: .25em;
    border-radius: 4px;
`;

export const GoogleText = styled.p`
    font-size: .9rem;
    margin: 0;
    margin-left: 3.3em;
    color: #fff;
`;

/* Google Button */

/* Add Image Button */

export const ButtonAddImageStyled = styled.button`
    border: none;
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: .2 ease-in-out transform;

    :hover {
        transition: .2 ease-in-out transform;
        transform: scale(.95);
    }
`;

export const AddImageIcon = styled( BsCardImage )`
    font-size: 1.5rem;
    color: ${ props => props.theme.primary };
`;


/* Add Image Button */