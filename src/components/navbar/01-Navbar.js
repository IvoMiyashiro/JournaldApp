import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/actions/01-auth';
import { logOutCleaning } from '../../redux/actions/02-notes';

import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { ButtonSecondary } from '../buttons/02-ButtonSecondary';
import { MobileMenu } from './02-MobileMenu';
import { Modal } from '../../components/modal/01-modal';

import {
    Nav,
    NavContainer,
    ColorModeIcon,
    HamburguerIcon,
    Section,
    NavName,
    NavNameContainer,
} from './styles';

export const Navbar = ({ 
    setTheme,
    isAuth,
    setIsLoggedIn,
}) => {

    const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const [ isOpen, setIsOpen ] = useState( false );
    const [ isDark, setIsDark ] = useState( false );
    const [ logoutModal, setLogoutModal ] = useState( false );

    const handleTheme = () => {
        setTheme( prev => !prev );
        setIsDark( prev => !prev )
    }

    const handleMobileMenu = () => {
        setIsOpen( prev => !prev );
    }

    const handleLogOut = () => {
        dispatch( startLogout() );
        dispatch( logOutCleaning() );
        setIsLoggedIn( false );
        setLogoutModal( prev => !prev );
    }

    const handleLogoutMenu = () => {
        setLogoutModal( prev => !prev );
    }

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavNameContainer>
                        <ColorModeIcon onClick={ handleTheme } isdark={ isDark ? 1 : 0 } />
                        { isAuth ? <NavName> Hi, { name }! </NavName> : '' }
                    </NavNameContainer>
                        {
                            isAuth
                                ?
                                    <Section>
                                        <ButtonPrimary
                                            fontSize="1rem"
                                            fontStyle="bold"
                                            height="26px"
                                            children="Add Entry"
                                            width="125px"
                                            to="/dashboard/add-entry"
                                        />
                                        <ButtonSecondary
                                            fontSize="1rem"
                                            fontStyle="bold"
                                            height="30px"
                                            children="log out"
                                            width="125px"
                                            func={ handleLogoutMenu }
                                        />
                                    </Section>
                                :   
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
                        }
                    <HamburguerIcon onClick={ handleMobileMenu } />
                </NavContainer>
            </Nav>
            <MobileMenu isOpen={ isOpen } isAuth={ isAuth } setIsLoggedIn={ setIsLoggedIn } />
            <Modal 
                isOpen={ logoutModal }
                setIsOpen={ setLogoutModal }
                func={ handleLogOut }
                title={ 'LOG OUT' }
                children ={ 'Are you sure you want to exit?'}
                buttonSecondary={'Cancel'}
                buttonPrimary={'Log out'}
            />
        </>
    )
}
