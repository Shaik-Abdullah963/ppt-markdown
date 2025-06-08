import React, { useState } from 'react';
import { parseMarkdown } from '../utils/astParser';

export default function MarkdownEditor({ initialContent = '' }) {
  const [markdown, setMarkdown] = useState(initialContent);
  const ast = parseMarkdown(markdown);

  return (
    <div className="editor-preview-container"
  style={{ display: 'flex', height: '100%' }}>
      {/* Editor Pane */}
      <textarea
        value={markdown}
        onChange={e => setMarkdown(e.target.value)}
        placeholder="Write your slide in Markdown…"
        style={{
          flex: 1,
          padding: '1rem',
          fontFamily: 'monospace',
          border: '1px solid #555',
          background: '#1e1e1e',
          color: '#fff'
        }}
      />

      {/* Live Preview Pane */}
      <div

        style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          background: '#fff',
          color: '#000',
          border: '1px solid #ccc'
        }}
      >
        <pre>{JSON.stringify(ast, null, 2)}</pre>
      </div>
    </div>
  );
}
