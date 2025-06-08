import React from 'react';
import PropTypes from 'prop-types';
import './CodeHighlighter.css';

/**
 * A very basic JS syntax highlighter:
 * – Wraps keywords, strings, and comments in <span> with classes.
 */
export default function CodeHighlighter({ code }) {
  // Escape HTML
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Highlight comments
  html = html.replace(
    /(\/\/[^\n]*)/g,
    '<span class="token-comment">$1</span>'
  );

  // Highlight strings
  html = html.replace(
    /(".*?"|'.*?'|`.*?`)/g,
    '<span class="token-string">$1</span>'
  );

  // Highlight JS keywords
  const keywords = [
    'const','let','var','function','return','if','else','for','while','switch','case','break'
  ];
  const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  html = html.replace(
    kwRegex,
    '<span class="token-keyword">$1</span>'
  );

  return (
    <pre className="code-block">
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}

CodeHighlighter.propTypes = {
  code: PropTypes.string.isRequired
};
