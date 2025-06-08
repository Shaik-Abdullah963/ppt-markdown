// frontend/src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MarkdownEditor from './components/MarkdownEditor';
import SlideViewer from './components/SlideViewer';
import { useSlides } from './hooks/useSlides';

export default function App() {
  const { slides, saveSlide, loading } = useSlides();

  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/editor">Editor</Link> |{' '}
        <Link to="/viewer">Viewer</Link>
      </nav>

      <Routes>
        <Route
          path="/editor"
          element={
            loading ? (
              <div style={{ padding: '1rem' }}>Loading slides…</div>
            ) : (
              <MarkdownEditor
                initialContent={slides[0] || ''}
                onSave={(newContent) => saveSlide(0, newContent)}
              />
            )
          }
        />

        <Route
          path="/viewer"
          element={
            loading ? (
              <div style={{ padding: '1rem' }}>Loading slides…</div>
            ) : (
              <SlideViewer slides={slides} />
            )
          }
        />

        <Route
          path="*"
          element={<div style={{ padding: '1rem' }}>Welcome! Select Editor or Viewer.</div>}
        />
      </Routes>
    </>
  );
}
