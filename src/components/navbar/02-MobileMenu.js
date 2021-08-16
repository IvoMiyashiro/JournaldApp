import React from 'react';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../redux/actions/01-auth';

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

    const handleLogOut = () => {
        dispatch( startLogout() );
        setIsLoggedIn( false );
    }

    return (
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
                                <HamburguerItem onClick={ handleLogOut }>
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
    )
}
