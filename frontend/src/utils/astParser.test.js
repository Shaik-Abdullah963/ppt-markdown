import { parseMarkdown } from './astParser'

describe('parseMarkdown', () => {
  it('parses a heading and paragraph into AST nodes', () => {
    const md = '# Hello\n\nThis is a test.'
    const ast = parseMarkdown(md)

    // Root should have two children: a heading and a paragraph
    expect(ast.type).toBe('root')
    expect(ast.children).toHaveLength(2)

    const [heading, paragraph] = ast.children
    expect(heading.type).toBe('heading')
    expect(heading.depth).toBe(1)
    expect(heading.children[0].value).toBe('Hello')

    expect(paragraph.type).toBe('paragraph')
    expect(paragraph.children[0].value).toBe('This is a test.')
  })
})
