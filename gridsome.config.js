// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Surya Wiguna',
  plugins: [
    {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'blog/*.md',
          typeName: 'BlogPost',
          route: '/blog/:slug'
        }
      }
  ],
  transformers: {
    remark: {
        externalLinksTarget: '_blank',
        plugins: [
            '@gridsome/remark-prismjs'
        ]
    }
  }
}
