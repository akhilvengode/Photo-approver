import styled from 'styled-components';
import { centerStyle } from '../../global.css';

export const Container = styled.div`
  position: relative;
  max-height: 500px;
  height: 500px;
  padding: 2rem;
  border-bottom: 2px solid lightgrey;

  @media screen and (max-width: 420px) {
    padding: 1rem;
    border-width: 1px;
    max-height: 300px;
    height: 300px;
  }
`;

export const ImagePlaceHolder = styled.div`
  position: absolute;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  background-color: #e8e8e8;
  ${centerStyle}
  @media screen and (max-width: 420px) {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
  }
`;

export const ImageContainer = styled(ImagePlaceHolder)`
  max-height: calc(100% - 4rem);
  background-color: black;

  @media screen and (max-width: 420px) {
    max-height: calc(100% - 2rem);
  }
`;
