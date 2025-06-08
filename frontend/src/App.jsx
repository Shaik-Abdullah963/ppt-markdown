import { Routes, Route, Link } from 'react-router-dom'
import Editor from './components/Editor'
import Viewer from './components/SlideViewer'
import MarkdownEditor from './components/MarkdownEditor'

export default function App() {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/editor">Editor</Link> |{' '}
        <Link to="/viewer">Viewer</Link>
      </nav>
      <Routes>
        <Route path="/editor" element={<MarkdownEditor initialContent={"# Slide Title\n\nYour content here."} />} />
        <Route
         path="/viewer"
        element={
           <Viewer
             markdown={`# Slide Title\n\n- bullet one\n- bullet two\n\n\`\`\`js\nconsole.log('Hello')\n\`\`\``}
          />
         }
        />
        <Route path="*" element={<div>Welcome! Select Editor or Viewer.</div>} />
      </Routes>
    </>
  )
}
