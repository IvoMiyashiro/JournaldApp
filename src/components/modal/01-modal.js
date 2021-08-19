import React from 'react';
import { ButtonPrimary } from '../buttons/01-ButtonPrimary';
import { ButtonSecondary } from '../buttons/02-ButtonSecondary';

import {
    ModalStyled,
    ModalMenu,
    ModalTitleSection,
    ModalTitle,
    ModalBodySection,
    ModalBody,
    ModalButtonsSection,
    TimesIcon,
} from './styles';

export const Modal = ({
    isOpen,
    title,
    children,
    buttonSecondary,
    buttonPrimary,
    func=null,
    setIsOpen,
    setFadeOut=null,
}) => {

    window.onclick = ( e ) => {
        if ( e.target.id === document.querySelector( "#modal" ).id ) {
            setIsOpen( prev => !prev );
        }
    }

    const handleModal = () => {
        setIsOpen( prev => !prev );
    }

    return (
        <ModalStyled isOpen={ isOpen } id="modal">
            <ModalMenu>
                <TimesIcon onClick={ handleModal } />
                <ModalTitleSection>
                    <ModalTitle> { title } </ModalTitle>
                </ModalTitleSection>
                <ModalBodySection>
                    <ModalBody> { children } </ModalBody>
                </ModalBodySection>
                <ModalButtonsSection>
                    <ButtonSecondary 
                        children={ buttonSecondary }
                        func={ () => setIsOpen( prev => !prev ) }
                        width="115px"
                    />
                    <ButtonPrimary 
                        children={ buttonPrimary }
                        func={ func }
                        width="115px"
                        setFadeOut={ setFadeOut }
                    />
                </ModalButtonsSection>
            </ModalMenu>
        </ModalStyled>
    )
}