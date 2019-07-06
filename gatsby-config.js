module.exports = {
  siteMetadata: {
    title: 'Write The Funcs',
    author: 'Chris Xu',
    description: 'A notdebook to obtain my personal opinions.',
    siteUrl: 'https://chrisxu.wtf',
    social: {
      twitter: '@_chrisxu',
      github: '@chrisxu',
    },
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Write the func`,
        short_name: `chrisxu.wtf`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cx-icon.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-63591366-2',
        head: false,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: 'gatsby-remark-prismjs',
      options: {
        inlineCodeMarker: '÷',
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'chrisxu.wtf',
        removeNonexistentObjects: true,
      },
    },
  ],
}
