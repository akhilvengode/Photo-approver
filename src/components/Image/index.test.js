import { Image } from '.';
import { render, screen } from '@testing-library/react';

describe('Testing Image component', () => {
  it('should render the Image correctly', () => {
    const testurl = 'https://testurl.com/image';
    render(<Image src={'https://testurl.com/image'} alt="image test" />);
    expect(screen.getByAltText('image test')).toHaveAttribute('src', testurl);
  });
});
