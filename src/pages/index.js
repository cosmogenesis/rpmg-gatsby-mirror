import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariables from "src/components/QueryFragments"
import HomePageView from "../views/HomePage"

const HomePage = ({ location }) => {
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
    <HomePageView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default HomePage
