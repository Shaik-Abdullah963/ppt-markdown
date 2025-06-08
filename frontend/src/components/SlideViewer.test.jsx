import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SlideViewer from './SlideViewer';

const slides = ['# A', '# B'];

describe('<SlideViewer />', () => {
  it('renders first slide and shows 1/2', () => {
    render(<SlideViewer slides={slides} />);
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A');
  });

  it('navigates to next slide on Next ▶ click', () => {
    render(<SlideViewer slides={slides} />);
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByText('2 / 2')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('B');
  });

  it('respects arrow keys', () => {
    render(<SlideViewer slides={slides} />);
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByText('2 / 2')).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });
});
