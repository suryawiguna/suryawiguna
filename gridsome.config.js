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
    },
    {
        use: 'gridsome-plugin-pwa',
        options: {
            title: 'Surya Wiguna',
            startUrl: '/',
            display: 'standalone',
            statusBarStyle: 'default',
            manifestPath: 'manifest.json',
            serviceWorkerPath: 'service-worker.js',
            cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
            shortName: 'Surya',
            themeColor: '#FB8E16',
            backgroundColor: '#ffffff',
            icon: './src/favicon.png', // must be provided
            msTileImage: '',
            msTileColor: '#FB8E16'
        }
    },
    {
        use: "gridsome-plugin-manifest",
        options: {
            backgroundColor: "#FFFFFF",
            iconPath: "./src/favicon.png",
            name: "Surya Wiguna",
            shortName: "Surya",
            themeColor: "#FB8E16",
        },
    },
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
