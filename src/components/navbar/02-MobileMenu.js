import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logOutCleaning } from '../../redux/actions/02-notes';
import { startLogout } from '../../redux/actions/01-auth';

import { Modal } from '../../components/modal/01-modal';

import {
    HamburguerMenu,
    HamburguerList,
    HamburguerItem,
    HamburguerLink,
} from './styles';

export const MobileMenu = ({
    isOpen, 
    isAuth, 
    setIsLoggedIn,
}) => {

    const dispatch = useDispatch();
    const [ logoutModal, setLogoutModal ] = useState( false );

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
            <HamburguerMenu isOpen={ isOpen } >
                {
                    isAuth
                        ?
                            <HamburguerList>
                                <HamburguerList>
                                    <HamburguerLink to="/dashboard/add-entry">
                                        <HamburguerItem>
                                            Add Entry
                                        </HamburguerItem>
                                    </HamburguerLink>
                                    <HamburguerItem onClick={ handleLogoutMenu }>
                                        Log out
                                    </HamburguerItem>
                                </HamburguerList>
                            </HamburguerList>
                        :
                            <HamburguerList>
                                <HamburguerLink to="/login">
                                    <HamburguerItem>
                                        Log In
                                    </HamburguerItem>
                                </HamburguerLink>
                                <HamburguerLink to="/signup">
                                    <HamburguerItem>
                                        Sign Up
                                    </HamburguerItem>
                                </HamburguerLink>
                            </HamburguerList>
                }
            </HamburguerMenu>
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
