import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';
import '@testing-library/jest-dom'


describe('<ProgressBar />', () => {
  it('renders correct fill width', () => {
    const { container } = render(<ProgressBar current={1} total={4} />);
    const fill = container.querySelector('.progress-fill');
    expect(fill).toHaveStyle({ width: '50%' });
  });
});
