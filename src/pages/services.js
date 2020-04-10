import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteVariables from "src/components/QueryFragments"
import ServicesView from "../views/ServicesPage"

const ServicesPage = ({ location }) => {
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
    <ServicesView
      siteVariables={contentfulWebsiteGlobalVariables}
      location={location}
    />
  )
}

export default ServicesPage
