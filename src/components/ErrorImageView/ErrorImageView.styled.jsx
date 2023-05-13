import styled from '@emotion/styled';

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 5px;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Message = styled.p`
  max-width: 80%;
  color: #3f51b5;
  text-shadow: 0 1px 1px #fff;
  text-align: center;
  font-size: 48px;
`;

export const ErrorImage = styled.img`
  width: 240px;
  height: auto;
  object-fit: contain;
  object-position: center;
//   margin-bottom: 24px;
`;
