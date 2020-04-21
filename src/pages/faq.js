/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariablesFragment from "src/components/QueryFragments"
import FaqPageView from "../views/FaqPage"

const FaqPage = ({ location }) => {
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
    <FaqPageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default FaqPage
