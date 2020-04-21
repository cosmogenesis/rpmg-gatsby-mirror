/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariablesFragment from "src/components/QueryFragments"
import PrivacyPageView from "../views/PrivacyPage"

const PrivacyPage = ({ location }) => {
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
    <PrivacyPageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default PrivacyPage
