/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Welcome to my website`,
    description: `Online representation of my life and work.`,
    titleTemplate: `%s `,
    url: `https://gatsby-mdx-blog-course-project.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@john_smilga`,
  },
  plugins: [
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Roboto:wght@300;400;500;600;700`,
          },
          {
            family: `Open Sans:wght@100;300;400;500;600;700`,
          },
        ],
      },
    },
  ],
}
