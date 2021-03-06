/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariablesFragment from "src/components/QueryFragments"
import ProfessionalsPageView from "../views/ProfessionalsPage"

const ProfessionalsPage = ({ location }) => {
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
    <ProfessionalsPageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default ProfessionalsPage
