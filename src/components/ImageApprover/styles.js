import styled from 'styled-components';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Cancel } from '../../assets/close.svg';
import { iconStyle, centerStyle } from '../../global.css';

export const StyledContainer = styled.div`
  background-color: white;
  width: 40%;
  min-width: 400px;
  border-radius: 6px;

  @media screen and (max-width: 420px) {
    min-width: 300px;
  }
`;

export const StyledHeader = styled.div`
  padding: 1rem 2rem;
  color: #3a54e4;
  font-weight: bold;
  border-bottom: 2px solid lightgrey;

  @media screen and (max-width: 420px) {
    padding: 1rem;
    font-size: 0.8rem;
    border-width: 1px;
  }
`;

export const StyledCheckIcon = styled(Check)`
  ${iconStyle}
`;

export const StyledCancelIcon = styled(Cancel)`
  ${iconStyle}
`;

export const ButtonGroup = styled.div`
  padding: 1rem;
  ${centerStyle}
`;
