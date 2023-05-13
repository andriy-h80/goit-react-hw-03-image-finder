import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const ModalStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 2px;
    width: 65vw;
    height: 650px;

    // background-color: #fffbe6;

    border-radius: 3px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 4px;

  width: 100%;
  
  color: #3f51b5;
  text-shadow: textShadow: 0 1px 1px #000000;
  background-color: rgba(238, 237, 241, 0.5);
  box-shadow: 0px -2px 4px 1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(5.5px);

  font-size: 16px;
  text-align: center;
`;
