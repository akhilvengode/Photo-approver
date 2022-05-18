import { Image, ShowImage, Loader } from '..';
import { Container, ImageContainer, ImagePlaceHolder } from './styles';

export const ImageModal = ({ currentImageUrl, onAddImage, loading, alt }) => {
  return (
    <Container>
      <ImagePlaceHolder>
        <ShowImage onAddImage={onAddImage} />
      </ImagePlaceHolder>
      {currentImageUrl && (
        <ImageContainer>
          <Image
            src={currentImageUrl}
            alt={alt || 'current image'}
            objectFit="contain"
          />
        </ImageContainer>
      )}
      {loading && (
        <ImagePlaceHolder>
          <Loader />
        </ImagePlaceHolder>
      )}
    </Container>
  );
};
