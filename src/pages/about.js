/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariablesFragment from "src/components/QueryFragments"
import AboutPageView from "../views/AboutPage"

const AboutPage = ({ location }) => {
  const { contentfulWebsiteGlobalVariables } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteGlobalVariables {
          ...SiteVariablesFragment
        }
      }
    `
  )

  return (
    <AboutPageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default AboutPage
