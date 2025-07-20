import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="heading-primary mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="heading-secondary mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3 mt-6 text-neutral-900 dark:text-neutral-50">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold mb-2 mt-4 text-neutral-900 dark:text-neutral-50">{children}</h4>
    ),
    
    // Paragraphs
    p: ({ children }) => (
      <p className="text-muted leading-relaxed mb-4">{children}</p>
    ),
    
    // Links
    a: ({ children, href }) => (
      <a 
        href={href}
        className="text-neutral-900 dark:text-neutral-100 underline decoration-neutral-400 hover:decoration-neutral-600 transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    
    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-muted">{children}</li>
    ),
    
    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 my-6 italic text-muted">
        {children}
      </blockquote>
    ),
    
    // Code
    code: ({ children }) => (
      <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    
    // Horizontal rule
    hr: () => (
      <hr className="border-neutral-200 dark:border-neutral-800 my-8" />
    ),
    
    // Strong and emphasis
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    
    ...components,
  }
}