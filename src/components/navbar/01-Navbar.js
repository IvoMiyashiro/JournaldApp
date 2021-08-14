import React, { useState } from 'react';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { ButtonSecondary } from '../buttons/02-ButtonSecondary';
import { MobileMenu } from './02-MobileMenu';

import {
    Nav,
    NavContainer,
    ColorModeIcon,
    HamburguerIcon,
    Section,
} from './styles';

export const Navbar = ({ setTheme }) => {

    const [ isOpen, setIsOpen ] = useState( false );
    const [ isDark, setIsDark ] = useState( false )

    const handleTheme = () => {
        setTheme( prev => !prev );
        setIsDark( prev => !prev )
    }

    const handleMobileMenu = () => {
        setIsOpen( prev => !prev );
    }

    return (
        <>
            <Nav>
                <NavContainer>
                    <ColorModeIcon onClick={ handleTheme } isdark={ isDark ? 1 : 0 } />
                    <Section>
                        <ButtonSecondary
                            fontSize="1rem"
                            fontStyle="bold"
                            height="30px"
                            children="Log In"
                            to="/login"
                            width="125px"
                        />
                        <ButtonPrimary
                            fontSize="1rem"
                            fontStyle="bold"
                            height="30px"
                            children="Sign Up"
                            to="/signup"
                            width="125px"
                        />
                    </Section>
                    <HamburguerIcon onClick={ handleMobileMenu } />
                </NavContainer>
            </Nav>
            <MobileMenu isOpen={ isOpen } />
        </>
    )
}
