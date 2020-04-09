import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariables from "src/components/QueryFragments"
import Homepage from "../views/HomePage"

const IndexPage = ({ location }) => {
  const { contentfulWebsiteGlobalVariables } = useStaticQuery(
    graphql`
      query {
        contentfulWebsiteGlobalVariables {
          ...SiteVariables
        }
      }
    `
  )
  return (
    <Homepage
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default IndexPage
