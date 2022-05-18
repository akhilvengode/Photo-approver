import { createPortal } from 'react-dom';
import { Overlay, Content, ScreenReaderContent } from './styles';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, open, closeFn }) => {
  return createPortal(
    <>
      {open && <Overlay onClick={closeFn} aria-hidden={open} />}
      <Content
        open={open}
        aria-describedby="modalDescription"
        aria-hidden={open}>
        <ScreenReaderContent id="modalDescription">
          This is a modal window which overlays the clicked image from the
          approved images. Clicking the overlay will close the button.
        </ScreenReaderContent>
        {children}
      </Content>
    </>,
    modalRoot,
  );
};
