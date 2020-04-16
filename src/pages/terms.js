import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariables from "src/components/QueryFragments"
import TermsPageView from "../views/TermsPage"

const TermsPage = ({ location }) => {
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
    <TermsPageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default TermsPage
