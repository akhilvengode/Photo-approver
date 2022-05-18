import { useState } from 'react';
import { ImagePlaceHolder, StyledImage } from './styles';

export const Image = ({ ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      {isLoading && <ImagePlaceHolder />}
      <StyledImage
        {...props}
        loading="lazy"
        onLoad={() => {
          setLoading(false);
        }}
      />
    </>
  );
};
