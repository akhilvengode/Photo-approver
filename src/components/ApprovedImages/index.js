import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Modal, Image, ImageSwiper } from '..';
import { StyledContainer, StyledHeader, ModalImageContainer } from './styles';

export const ApprovedImages = ({ approvedImages }) => {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({});

  return (
    <StyledContainer>
      <StyledHeader>APPROVED IMAGES{`(${approvedImages.length})`}</StyledHeader>
      <Modal open={open} closeFn={() => setOpen(false)}>
        <ModalImageContainer>
          <Image
            src={activeImage?.url}
            alt={activeImage?.description || 'active image'}
            objectFit="contain"
          />
        </ModalImageContainer>
      </Modal>
      <ImageSwiper>
        {approvedImages.map(({ urls: { thumb, regular }, description, id }) => (
          <SwiperSlide
            key={id}
            style={{ width: '80px', overflow: 'hidden', borderRadius: '10px' }}>
            <Image
              src={thumb}
              alt={description || 'thumb image'}
              width="80px"
              height="50px"
              borderRadius="10px"
              onClick={() => {
                setActiveImage({ url: regular, description });
                setOpen(true);
              }}
              objectFit="cover"
              cursor="pointer"
            />
          </SwiperSlide>
        ))}
      </ImageSwiper>
    </StyledContainer>
  );
};
