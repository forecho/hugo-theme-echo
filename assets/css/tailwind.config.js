const themeDir = __dirname + '/../../';

module.exports = {
  purge: {
    content: [
      './layouts/**/*.html', 
      './content/**/*.md', 
      './content/**/*.html',
      themeDir + 'layouts/**/*.html',
      themeDir + 'exampleSite/content/**/*.html',
      themeDir + 'exampleSite/content/**/*.md',
    ],
  },
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'Georgia', 
        'Cambria', 
        'Times New Roman', 
        'Times', 
        'serif',
      ],
      mono: [
        'Menlo', 
        'Monaco', 
        'Consolas', 
        'Liberation Mono', 
        'Courier New', 
        'monospace'
      ]
    },
  },
  darkMode: 'class',
  variants: {},
  plugins: [],
}