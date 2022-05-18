import { ButtonContentWrapper, StyledAddIcon, StyledButton } from './styles';

export const ShowImage = ({ onAddImage }) => {
  return (
    <StyledButton onClick={onAddImage}>
      <ButtonContentWrapper>
        <StyledAddIcon />
        <span>Show Image</span>
      </ButtonContentWrapper>
    </StyledButton>
  );
};
