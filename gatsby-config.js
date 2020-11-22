const siteUrl = 'https://olegchursin.com';

const meta = {
  title: 'Cool Gatsby Starter',
  description:
    'Themeable Typescript Gatsby Starter with Styled Components and Framer Motion',
  author: 'olegchursin',
  url: siteUrl,
  image: `${siteUrl}/icons/icon_512x512.png`,
  keywords: ['gatsby', 'react', 'typescript']
};

module.exports = {
  siteMetadata: {
    title: meta.title,
    description: meta.description,
    author: meta.author,
    url: meta.url,
    keywords: meta.keywords,
    image: meta.image
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meta.title,
        short_name: meta.title,
        description: meta.description,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/images/icon.png',
        icons: [
          {
            src: 'icons/icon_512x512.png',
            sizes: '512x512'
          },
          {
            src: 'icons/icon_196x196.png',
            sizes: '196x196'
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
