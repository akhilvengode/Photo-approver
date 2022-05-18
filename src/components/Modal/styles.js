import styled from 'styled-components';
import { centerStyle } from '../../global.css';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.3); */
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10;
`;

export const Content = styled.div`
  position: absolute;
  width: 40vw;
  min-width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 15;
  transition: 300ms transform;
  transform: ${({ open }) => !open && 'translate(-50%, -50%) scale(0)'};
  ${centerStyle}
`;

export const ScreenReaderContent = styled.div`
  width: 0;
  height: 0;
  max-height: 0;
  overflow: hidden;
  pointer-events: none;
`;
