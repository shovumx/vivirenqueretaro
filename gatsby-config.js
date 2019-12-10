module.exports = {
  siteMetadata: {
    title: "Compra y renta de bienes raíces en Querétaro",
    author: "Agencia inmobiliaria",
    description:
      "Somos una Agencia Inmobiliaria en Querétaro basada en Inteligencia Artificial y Big Data.",
    siteUrl: "https://equilibrio.studio",
    facebook: "https://facebook.com/VivirEnQueretaroMX"
  },
  
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-netlify`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Vivir en Querétaro",
        short_name: "Vivir en Querétaro",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/icon.png",
        orientation: "portrait"
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://vivirenqueretaro.mx',
        sitemap: 'https://vivirenqueretaro.mx/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150522236-2",
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `700`, `800`]
          },
          {
            family: `Poppins`,
            subsets: [`latin`]
          },
          {
            family: `Source Sans Pro`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Source Sans Pro`,
            subsets: [`latin`]
          },
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
