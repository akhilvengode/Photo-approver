import styled from 'styled-components';
import { Button } from '../Button';
import { ReactComponent as Add } from '../../assets/addIcon.svg';
import { centerStyle } from '../../global.css';

export const ButtonContentWrapper = styled.div`
  ${centerStyle}
`;

export const StyledButton = styled(Button)`
  background-color: #3a54e4;
  width: 200px;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;

  &:hover {
    background-color: #1e3ce2;
  }
`;

export const StyledAddIcon = styled(Add)`
  fill: white;
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;
