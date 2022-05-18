import { createGlobalStyle, css } from 'styled-components';
export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    right: 0;
    left: auto;
    background-color: white;
    padding: 1rem 0.5rem;
    top: calc(50% - 1rem);
    transition: opacity 300ms;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
    background-color: white;
    padding: 1rem 0.5rem;
    top: calc(50% - 1rem);
  }

  .swiper-button-next.swiper-button-disabled, 
  .swiper-button-prev.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }

  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    content: 'next';
    font-size: 2rem;
    font-weight: bold;
  }

  .swiper-button-prev:after, 
  .swiper-rtl .swiper-button-next:after {
    content: 'prev';
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const iconStyle = css`
  width: 20px;
  height: 20px;
  fill: white;
`;

export const centerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
