import React from 'react';

import {
    HamburguerMenu,
    HamburguerList,
    HamburguerItem,
    HamburguerLink,
} from './styles';

export const MobileMenu = ({ isOpen }) => {

    return (
        <HamburguerMenu isOpen={ isOpen }>
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
        </HamburguerMenu>
    )
}
