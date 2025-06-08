import React from 'react';
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react';
import MarkdownEditor from './MarkdownEditor';

describe('<MarkdownEditor />', () => {
  it('renders initial content', () => {
    render(<MarkdownEditor initialContent="Hello" onSave={() => {}} />);
    expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
  });

  it('allows typing and updates textarea', () => {
    render(<MarkdownEditor initialContent="" onSave={() => {}} />);
    const ta = screen.getByPlaceholderText(/write your slide/i);
    fireEvent.change(ta, { target: { value: '# Title' } });
    expect(ta.value).toBe('# Title');
  });

  it('calls onSave when clicking Save Slide', async () => {
    const saveFn = vi.fn().mockResolvedValue();
    render(<MarkdownEditor initialContent="Test" onSave={saveFn} />);
    const btn = screen.getByRole('button', { name: /save slide/i });
    fireEvent.click(btn);
    expect(btn).toBeDisabled();
    // wait for async
    await screen.findByRole('button', { name: /save slide/i });
    expect(saveFn).toHaveBeenCalledWith('Test');
  });
});
