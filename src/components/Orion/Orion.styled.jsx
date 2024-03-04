import styled from '@emotion/styled';

export const ORION = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  transition: all 0.4s ease;
`;

export const PHOTO_DIV = styled.div``;
export const IMG_DIV = styled.div`
  display: flex;
`;
export const IMG = styled.img`
  width: 320px;
`;
export const PAG_DIV = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#333' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${props => (props.active ? '#333' : '#999')};
  }
`;
