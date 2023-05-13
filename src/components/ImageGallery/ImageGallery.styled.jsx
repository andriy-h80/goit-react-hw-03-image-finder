import styled from '@emotion/styled';

export const ImageGalleryStyled = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const Text = styled.p`
    margin: 0 auto;
    margin-bottom: 32px;
    max-width: 80%;
    color: #3f51b5;
    text-shadow: 0 1px 1px #000000;
    text-align: center;  
    font-size: 32px;
`;
