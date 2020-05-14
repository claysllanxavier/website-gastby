module.exports = {
  siteMetadata: {
    title: `Unnitec | Soluções em Tecnologia da Informação`,
    description: `Desenvolvimento de Aplicativos Android e iOS e Sistemas Web. Empresa de desenvolvimento de aplicativos móveis, criação de aplicativos, soluções mobile, desenvolvimento sob demanda de sistemas web e criação de lojas virtuais. Suporte a computadores. Infraestrutura de rede e Consultoria em Tecnologia`,
    author: `Claysllan Xavier`,
    siteUrl: `https://unnitec.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unnitec`,
        short_name: `Unnitec`,
        start_url: `/`,
        background_color: `#4864e6`,
        theme_color: `#4864e6`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `500`, `700`],
          },
        ],
        formats: ["woff", "woff2"],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
