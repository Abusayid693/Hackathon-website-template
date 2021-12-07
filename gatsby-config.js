module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'services',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
