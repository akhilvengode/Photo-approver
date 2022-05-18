import { Modal } from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testing Modal component', () => {
  const closeFunctionMock = jest.fn();

  it('should render the button correctly', () => {
    render(<Modal closeFn={closeFunctionMock}>Hello</Modal>);
    expect(screen.getByRole('button')).toHaveTextContent(/hello/i);
  });

  it('should call the function when clicked', () => {
    render(
      <Modal type="button" onClick={closeFunctionMock}>
        Hello
      </Modal>,
    );
    userEvent.click(screen.getByRole('button'));
    expect(closeFunctionMock).toHaveBeenCalledTimes(1);
  });
});
