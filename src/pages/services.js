/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariablesFragment from "src/components/QueryFragments"
import ServicesView from "../views/ServicesPage"

const ServicesPage = ({ location }) => {
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
    <ServicesView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default ServicesPage
