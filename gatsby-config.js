module.exports = {
  siteMetadata: {
    title: 'Write The Funcs',
    author: 'Chris Xu',
    description: 'A notdebook to obtain my personal opinions.',
    siteUrl: 'https://chrisxu.wtf',
    social: {
      twitter: '@_chrisxu',
      github: '@chrisxu'
    }
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/cx-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-63591366-2",
        head: false,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ]
}
