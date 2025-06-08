import React from 'react';
import { parseMarkdown } from '../utils/astParser';
import CodeHighlighter from './CodeHighlighter';

/**
 * Recursively render an MDAST node tree as React elements.
 */
function renderNode(node, key) {
  const children = (node.children || []).map((n, i) => renderNode(n, `${key}-${i}`));

  switch (node.type) {
    case 'heading':
      const Tag = `h${node.depth}`; 
      return <Tag key={key}>{children}</Tag>;

    case 'paragraph':
      return <p key={key}>{children}</p>;

    case 'text':
      return <span key={key}>{node.value}</span>;

    case 'list':
      return (
        <ul key={key}>
          {children}
        </ul>
      );

    case 'listItem':
      return <li key={key}>{children}</li>;

    case 'code':
      return <CodeHighlighter key={key} code={node.value} />;

    default:
      // fallback: render children
      return <div key={key}>{children}</div>;
  }
}

export default function SlideViewer({ markdown }) {
  const ast = parseMarkdown(markdown || '');

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {ast.children.map((node, idx) => renderNode(node, `node-${idx}`))}
    </div>
  );
}
