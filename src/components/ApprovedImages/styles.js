import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 1rem 2rem;
  border-bottom: 2px solid lightgrey;

  @media screen and (max-width: 420px) {
    padding: 1rem;
    font-size: 0.8rem;
    border-width: 1px;
  }
`;

export const StyledHeader = styled.div`
  color: #3a54e4;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ModalImageContainer = styled.div`
  background-color: black;
  width: calc(40vw - 4rem);
  height: 500px;
  max-height: 500px;
  min-width: 300px;
`;
