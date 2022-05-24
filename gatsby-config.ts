import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        allPageHeaders: ['Strict-Transport-Security: max-age=31536000; includeSubDomains; preload'],
        headers: {
          '/fonts/*': ['cache-control: public, max-age=31536000, immutable'],
        },
      },
    },
  ],
}

export default config
