import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';

export const ModalStyled = styled.div`
    align-items: center;
    background: rgba( 0, 0, 0, 0.2 );
    display: ${ props => 
        props.isOpen
            ? 'flex'
            : 'none' 
    };
    height: 100vh;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
`;

export const ModalMenu = styled.div`
    background: #fff;
    border-radius: 4px;
    max-width: 375px;
    position: relative;
    width: 80%;
`;

export const TimesIcon = styled( FaTimes )`
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const ModalTitleSection = styled.section`
    background: #F0F4F8;
    border-radius: 4px 4px 0 0;
    padding: 1em;
`;

export const ModalTitle = styled.h3`
    margin: 0;
`;

export const ModalBodySection = styled.section`
    padding: 1em;
`;

export const ModalBody = styled.p`
    margin: 0;
`;

export const ModalButtonsSection = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 1em;
`;