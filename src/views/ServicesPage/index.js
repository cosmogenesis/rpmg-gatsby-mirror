import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  PageScaffolding,
  FeaturedServicesCollections,
} from "src/components/QueryFragments"

import Layout from "src/components/Layout"
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import PromotedStaffSection from "./Sections/PromotedStaffSection"
import ServicesListSection from "./Sections/ServicesListSection"

import styles from "src/assets/jss/material-kit-react/views/servicesPage"
const useStyles = makeStyles(styles)

export default function ServicesPage(props) {
  const { contentfulPageServicesListing } = useStaticQuery(
    graphql`
      query {
        contentfulPageServicesListing {
          scaffolding {
            ...PageScaffolding
          }
          featuredProfessionals {
            ...FeaturedProfessionals
          }
        }
      }
    `
  )

  const {
    scaffolding,
    featuredProfessionals,
    //featuredServices,
  } = contentfulPageServicesListing

  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <ServicesListSection />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedStaffSection
          siteVariables={props.siteVariables}
          featuredProfessionals={featuredProfessionals}
        />
      </GridItem>
    </Layout>
  )
}
