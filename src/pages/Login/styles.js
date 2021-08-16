import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

export const LoginScreen = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin-top: -70px;
`;

export const LinkR = styled( Link )`
    align-items: center;
    color: ${ props => props.theme.textColor };
    display: flex;
    font-size: .85rem;
    margin-right: 16em;
    margin-top: 1em;
    text-decoration: none;
`;

export const ArrowIcon = styled( BsChevronRight )`
    font-size: .65rem;
    margin-top: .22em;
`;