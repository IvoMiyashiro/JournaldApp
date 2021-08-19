import styled from "styled-components";

const inputError = `
    border: 2px solid red;
    background-color: #FFF2F2;
`;

const inputCheck = `
    border: 2px solid transparent;
    background-color: #E8F0FE;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Label = styled.label`
    font-size: .85rem;
    font-family: 'Source Sans Pro';
    font-weight: bold;
    font-size: .85rem;
    margin-left: .25em;
    ${props => 
        props.isValid === 1 || props.isValid === null
            ? 'color: black'
            : 'color: red'
    } 
`;

export const Input = styled.input`
    background: #E8F0FE;
    border-radius: 4px;
    border: none;
    height: 25px;
    margin-bottom: .5em;
    margin-top: .25em;
    outline: none;
    padding: .25em .75em;
    ${ props => 
        props.isValid === 1 || props.isValid === null 
            ? inputCheck 
            : inputError
    }
`;

export const Error = styled.small`
    color: red;
    font-size: .8rem;
    margin-left: .25em;
    position: absolute;
    bottom: -13px;
`;

export const CheckboxContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: .85rem;
    margin-top: 2em;
`;

export const InputCheckbox = styled.input`
    
`;

export const CheckboxText = styled.label`
    color: black;
    margin: 0;
    margin-bottom: .1em;
`;

export const Select = styled.select`
    width: 35px;
    height: 30px;
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: .85rem;
    background: transparent;
    color: black;
    margin-left: .5em;
`;

export const Option = styled.option`
    font-size: .85rem;
    color: black;
`;
