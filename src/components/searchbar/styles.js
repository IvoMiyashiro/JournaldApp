import styled from "styled-components";
import { GrSearch } from 'react-icons/gr';

export const SearchbarStyled = styled.form`
    background: #E8F0FE;
    box-shadow:
    0 0px 2.2px rgba(0, 0, 0, 0.006),
    0 0px 5.3px rgba(0, 0, 0, 0.008),
    0 0px 10px rgba(0, 0, 0, 0.01),
    0 0px 17.9px rgba(0, 0, 0, 0.012),
    0 0px 33.4px rgba(0, 0, 0, 0.014),
    0 0px 80px rgba(0, 0, 0, 0.02);
    border-radius: 100px;
    display: flex;
    height: 40px;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
`;

export const SearchInput = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding-left: 1.15em;
`;

export const SearchButton = styled.button`
    background: none;
    border: none;
    margin-right: .75em;
`;

export const SearchIcon = styled( GrSearch )`
    font-size: 1.25rem;
`;

