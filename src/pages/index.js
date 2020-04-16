import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariables from "src/components/QueryFragments"
import HomePageView from "../views/HomePage"

const HomePage = ({ location }) => {
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
    <HomePageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default HomePage
