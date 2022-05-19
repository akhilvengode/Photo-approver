import { ButtonContentWrapper, StyledAddIcon } from './styles';
import { Button } from '..';

export const ShowImage = ({ onAddImage }) => {
  return (
    <Button onClick={onAddImage}>
      <ButtonContentWrapper>
        <StyledAddIcon />
        <span>Show Image</span>
      </ButtonContentWrapper>
    </Button>
  );
};
