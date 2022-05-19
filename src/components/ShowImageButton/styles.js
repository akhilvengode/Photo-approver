import styled from 'styled-components';
import { ReactComponent as Add } from '../../assets/addIcon.svg';
import { centerStyle, iconStyle } from '../../global.css';

export const ButtonContentWrapper = styled.div`
  ${centerStyle}
`;

export const StyledAddIcon = styled(Add)`
  ${iconStyle}
  margin-right: 1rem;
`;
