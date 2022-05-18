import { useState, useEffect, useRef } from 'react';
import { fetchPhoto, getFromLocalStorage, addToLocalStorage } from '../utils';

export const useData = () => {
  const rejectedPhotoIds = useRef(
    new Set(getFromLocalStorage('rejected-image-ids') || null),
  );

  const [currentImage, setCurrentImage] = useState(
    getFromLocalStorage('current-image') || {},
  );
  const [approvedImages, addApprovedImages] = useState(
    getFromLocalStorage('approved-images') || [],
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    addToLocalStorage('current-image', currentImage);
  }, [currentImage]);

  useEffect(() => {
    addToLocalStorage('approved-images', approvedImages);
  }, [approvedImages]);

  const onApproveImage = () => {
    addApprovedImages((prevImages) => [currentImage, ...prevImages]);
    setCurrentImage({});
    onRejectImage();
  };

  const onAddImage = async () => {
    try {
      let photo;
      setLoading(true);
      do {
        photo = await fetchPhoto();
      } while (rejectedPhotoIds.current.has(photo.id));
      setCurrentImage({
        urls: photo?.urls,
        id: photo?.id,
        description: photo?.description,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('Error', err);
    }
  };

  const onRejectImage = () => {
    rejectedPhotoIds.current.add(currentImage.id);
    addToLocalStorage(
      'rejected-image-ids',
      Array.from(rejectedPhotoIds.current),
    );
    setCurrentImage({});
    onAddImage();
  };

  return {
    currentImage,
    setCurrentImage,
    onAddImage,
    onApproveImage,
    approvedImages,
    onRejectImage,
    loading,
  };
};
