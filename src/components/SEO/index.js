import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
//import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, scaffolding, siteVariables }) {
  /** reduce queries but moving this to a higher level component - GM
     const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `
    )
*/

  const { seoPageTitle, seoDescription, keywords } = scaffolding

  const metaDescription = seoDescription || description

  return (
    <Helmet
      keywords={keywords}
      htmlAttributes={{
        lang,
      }}
      title={seoPageTitle}
      titleTemplate={`%s | ${siteVariables.siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: seoPageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteVariables.producer,
        },
        {
          name: `twitter:title`,
          content: seoPageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        rel="stylesheet"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  siteVariables: PropTypes.object.isRequired,
  scaffolding: PropTypes.object.isRequired,
}

export default SEO
