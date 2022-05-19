import { render, screen } from '@testing-library/react';
import { Modal } from '.';
import userEvent from '@testing-library/user-event';

describe('Testing Modal Component', () => {
  const root = document.createElement('div');

  beforeAll(() => {
    document.body.appendChild(root);
  });

  afterAll(() => {
    document.body.removeChild(root);
  });
  const closeFn = jest.fn();

  it('should render the modal properly', () => {
    render(
      <Modal open root={root}>
        Hello
      </Modal>,
    );
    expect(screen.getByTestId('test-modal')).toHaveTextContent(/hello/i);
  });

  it('should invoke the close function on clicking the overlay', () => {
    render(
      <Modal open root={root} closeFn={closeFn}>
        Hello
      </Modal>,
    );
    userEvent.click(screen.getByTestId('overlay'));
    expect(closeFn).toHaveBeenCalledTimes(1);
  });
});
