import styled, { keyframes } from 'styled-components';
import { centerStyle } from '../../global.css';

const placeholderAnimation = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: 100% 100%;
    }
`;

export const ImagePlaceHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, grey, lightgrey);
  background-size: 200% 200%;
  animation: ${placeholderAnimation} 1s infinite alternate;
  ${centerStyle}
`;

export const StyledImage = styled.img`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  object-fit: ${({ objectFit }) => objectFit || 'contain'};
  cursor: ${({ cursor }) => cursor || 'auto'};
`;
