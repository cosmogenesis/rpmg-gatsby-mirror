/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariablesFragment from "src/components/QueryFragments"
import ResourcesPageView from "../views/ResourcesPage"

const ResourcesPage = ({ location }) => {
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
    <ResourcesPageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default ResourcesPage
