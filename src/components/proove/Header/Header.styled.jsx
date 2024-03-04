import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const HEADER = styled.header`
  display: flex;
  position: relative;
  max-width: 100%;
  padding: 10px;
  height: 30px;
  background-color: #111;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const MENU_BUTTON = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 25px;
  height: 3px;
  background-color: #fff;
  transition: all 0.5s ease;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  ${props =>
    props.isOpen &&
    `
    background-color: transparent;

    &::before {
      transform: rotate(45deg);
      top: 0;
    }

    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  `}
`;

export const MENU = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid #fff;
  background-color: rgb(0, 0, 0);
  color: #fff;
  padding: 1rem;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  animation: ${props => (props.isOpen ? slideDown : slideUp)} 0.5s ease;
  top: ${props => (props.isOpen ? '50px' : '-100%')};
  z-index: 1;
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const PHONE = styled.div`
  display: block;
  margin: 10px;
  font-size: 20px;
  font-family: 'TildaSans', Arial, sans-serif;
`;
export const BUTTON = styled.button`
  margin: 10px;
  border: none;
  border-radius: 30px;
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
  color: #000000;
  background-color: #ffffff;
  font-size: 16px;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
`;
