import styled, { css } from 'styled-components';
import { centerStyle } from '../../global.css';

const BUTTON_VARIANT_STYLE = {
  disabled: css`
    background-color: lightgrey;
    pointer-events: none;
    cursor: pointer;
  `,
  primary: css`
    background-color: #3a54e4;
    transition: background-color 300ms;
    &:hover {
      background-color: #1e3ce2;
    }
    &:focus {
      outline: 2px solid black;
    }
  `,
  secondary: css`
    background-color: #434349;
    transition: background-color 300ms;
    &:hover {
      background-color: #202023;
    }
  `,
  'primary-nobg': css`
    background-color: transparent;
    color: #3a54e4;
  `,
};

export const ButtonStyled = styled.button`
  ${centerStyle}
  padding: 1rem 2rem;
  margin: 0 1rem;
  min-width: ${({ minWidth }) => minWidth || '6rem'};
  min-width: 120px;
  font-size: 1rem;
  color: white;
  border: none;
  cursor: pointer;
  ${({ disabled, variant }) =>
    disabled ? BUTTON_VARIANT_STYLE.disabled : BUTTON_VARIANT_STYLE[variant]}
  border-radius: ${({ roundButton }) => (roundButton ? '50px' : '4px')}
`;
