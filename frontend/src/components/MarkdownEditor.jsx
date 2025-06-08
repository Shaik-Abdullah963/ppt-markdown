// frontend/src/components/MarkdownEditor.jsx
import React, { useState } from 'react';
import { parseMarkdown } from '../utils/astParser';

export default function MarkdownEditor({
  initialContent = '',
  onSave = async () => {}
}) {
  const [markdown, setMarkdown] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const ast = parseMarkdown(markdown);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(markdown);
    } catch (err) {
      console.error('Save failed', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="editor-preview-container"
      style={{ display: 'flex', height: '100%' }}
    >
      {/* Editor Pane */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
            color: '#fff',
            resize: 'none'
          }}
        />
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            marginTop: '0.5rem',
            alignSelf: 'flex-end',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: saving ? 'not-allowed' : 'pointer'
          }}
        >
          {saving ? 'Saving…' : 'Save Slide'}
        </button>
      </div>

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
