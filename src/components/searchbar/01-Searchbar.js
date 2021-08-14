import React from 'react';

import {
    SearchbarStyled,
    SearchInput,
    SearchButton,
    SearchIcon,
} from './styles';


export const Searchbar = () => {

    const handleSubmit = ( e ) => {
        e.preventDefault();

        
    }

    return (
        <SearchbarStyled onSubmit={ handleSubmit }>
            <SearchInput 
                type="text" 
                name="searchbar"
            />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </SearchbarStyled>
    )
}
