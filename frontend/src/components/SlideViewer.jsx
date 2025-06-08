// frontend/src/components/SlideViewer.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { parseMarkdown } from '../utils/astParser';
import CodeHighlighter from './CodeHighlighter';

function renderNode(node, key) {
  const children = (node.children || []).map((n, i) => renderNode(n, `${key}-${i}`));

  switch (node.type) {
    case 'heading': {
      const Tag = `h${node.depth}`;
      return <Tag key={key}>{children}</Tag>;
    }
    case 'paragraph':
      return <p key={key}>{children}</p>;
    case 'text':
      return <span key={key}>{node.value}</span>;
    case 'list':
      return <ul key={key}>{children}</ul>;
    case 'listItem':
      return <li key={key}>{children}</li>;
    case 'code':
      return <CodeHighlighter key={key} code={node.value} />;
    default:
      return <div key={key}>{children}</div>;
  }
}

export default function SlideViewer({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const markdown = slides[current] || '';
  const ast = parseMarkdown(markdown);

  const prev = useCallback(() => {
    setCurrent(i => Math.max(i - 1, 0));
  }, []);

  const next = useCallback(() => {
    setCurrent(i => Math.min(i + 1, slides.length - 1));
  }, [slides.length]);

  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button onClick={prev} disabled={current === 0}>
          ◀ Prev
        </button>
        <span>{current + 1} / {slides.length}</span>
        <button onClick={next} disabled={current === slides.length - 1}>
          Next ▶
        </button>
      </div>

      {/* Slide content */}
      <div key={current}>
        {ast.children.map((node, idx) => renderNode(node, `node-${idx}`))}
      </div>
    </div>
  );
}
