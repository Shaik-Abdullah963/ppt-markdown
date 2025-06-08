// frontend/src/utils/astParser.js
import { unified } from 'unified'
import remarkParse from 'remark-parse'

/**
 * parseMarkdown
 * @param {string} markdown - raw markdown text
 * @returns {import('mdast').Root} the Markdown AST
 */
export function parseMarkdown(markdown) {
  const parser = unified().use(remarkParse)
  const ast = parser.parse(markdown)
  return ast
}
