import styled from '@emotion/styled';
import backgroundImage from './img/proove_orion_4.png';

export const ADVANT_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0;
  background-color: #f2f2f2;
`;
export const TOTAL_ADVANT_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;
export const TOTAL_P = styled.p`
  display: flex;
  padding: 0 0 40px 0;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #000000;
  line-height: 1.23;
`;
export const INFO_DIV = styled.div``;
export const INFO_IMG = styled.img``;

export const IMG_BG_DIV = styled.div`
  width: 100%;
  height: 220px;
  background-size: cover;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: left;
  @media (min-width: 468px) {
    height: 300px;
  }
  @media (min-width: 578px) {
    height: 380px;
  }
  @media (min-width: 728px) {
    height: 450px;
    background-position: center center;
  }
  @media (min-width: 988px) {
    height: 570px;
  }
  @media (min-width: 1208px) {
    height: 650px;
  }
  @media (min-width: 1508px) {
    height: 770px;
  }
`;
