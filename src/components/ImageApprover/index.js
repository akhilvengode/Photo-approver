import { ApprovedImages, ImageModal, Button } from '..';
import { useData } from '../../hooks/useData';
import {
  StyledCancelIcon,
  StyledCheckIcon,
  StyledContainer,
  StyledHeader,
  ButtonGroup,
} from './styles';

export const ImageApprover = () => {
  const {
    currentImage,
    onAddImage,
    onApproveImage,
    approvedImages,
    loading,
    onRejectImage,
  } = useData();

  const currentImageUrl = currentImage.urls?.regular;
  const currentImageDescription = currentImage.description;
  const isButtonDisabled = !currentImageUrl || loading;

  return (
    <StyledContainer>
      <StyledHeader>IMAGE APPROVAL APPLICATION</StyledHeader>
      <ApprovedImages approvedImages={approvedImages} />
      <ImageModal
        currentImageUrl={currentImageUrl}
        alt={currentImageDescription}
        onAddImage={onAddImage}
        loading={loading}
      />
      <ButtonGroup>
        <Button
          variant="secondary"
          onClick={onRejectImage}
          disabled={isButtonDisabled}
          aria-label="reject image">
          <StyledCancelIcon />
        </Button>
        <Button
          variant="primary"
          onClick={onApproveImage}
          aria-label="approve image"
          disabled={isButtonDisabled}>
          <StyledCheckIcon />
        </Button>
      </ButtonGroup>
    </StyledContainer>
  );
};
