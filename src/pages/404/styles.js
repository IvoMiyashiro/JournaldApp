import styled from "styled-components";

export const NotFoundScreen = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    margin-top: -70px;
    max-width: 1080px;
    padding-top: 90px;
`;

export const Title = styled.h1`
    font-size: 4rem;
    color: ${ props => props.theme.secondary };
    margin: 0;
    text-align: center;
`;

export const SubTitle = styled.h3`
    color: ${ props => props.theme.secondary };
    margin: 0;
    text-align: center;
    margin: 0;
    margin-top: -25px;
`;

export const NotFoundSvg = styled.img`
    width: 250px;
    margin: 2em 0;
`;