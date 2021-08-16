import styled from "styled-components";
import { Link } from 'react-router-dom';

import { VscColorMode } from 'react-icons/vsc';
import { FaHamburger } from 'react-icons/fa';

import { bps } from '../../styles/03-breakPoints';

export const Nav = styled.nav`
    position: relative;
    width: 100%;
    background: transparent;
`;

export const NavContainer = styled.div`
    align-items: center;
    display: flex;
    height: 70px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    width: 90%;
    background: transparent;
`;

export const ColorModeIcon = styled( VscColorMode )`
    color: ${props => props.theme.primary};
    cursor: pointer;
    font-size: 2rem;
    transition: .2s ease transform;
    ${ props => props.isdark ? 'transform: rotate(180deg)' : undefined };
`;

export const HamburguerIcon = styled( FaHamburger )`
    color: ${props => props.theme.primary};
    cursor: pointer;
    display: block;
    font-size: 2rem;

    ${ bps.desktop } {
        display: none;
    }
`;

export const Section = styled.section`
    display: none;
    gap: 1em;

    ${ bps.desktop } {
        display: flex;
    }
`;

export const HamburguerMenu = styled.div`
    background: ${ props => props.theme.primary };
    height: ${ props => props.isOpen ? '134px' : '0px' };
    overflow: hidden;
    text-align: center;
    transition: .2s ease height;
    width: 100%;

    ${ bps.desktop } {
        display: none;
    }
`;

export const HamburguerList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const HamburguerItem = styled.li`
    color: #fff;
    cursor: pointer;
    font-size: 1.115rem;
    font-weight: 600;
    padding: 1.25em;
    text-transform: uppercase;
`;

export const HamburguerLink = styled( Link )`
    text-decoration: none;
`;

export const NavNameContainer = styled.section`
    align-items: center;
    display: flex;
`;

export const NavName = styled.p`
    color: ${ props => props.theme.textColor };
    display: inline-block;
    font-weight: 600;
    margin: 0;
    margin-left: .65em;
`;