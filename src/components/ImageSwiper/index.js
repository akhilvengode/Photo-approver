import { Swiper } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

export const ImageSwiper = ({ children }) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      modules={[Navigation, Mousewheel]}
      navigation
      mousewheel>
      {children}
    </Swiper>
  );
};
