import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  PageScaffolding,
  ServiceCollections,
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
  const {
    contentfulPageServicesListing,
    allContentfulServiceCollectionProgramOrServiceCategory,
  } = useStaticQuery(
    graphql`
      query {
        allContentfulServiceCollectionProgramOrServiceCategory {
          nodes {
            ...ServiceCollections
          }
        }
        contentfulPageServicesListing {
          scaffolding {
            ...PageScaffolding
          }
          headerText_serviceListing
          featuredProfessionals {
            ...FeaturedProfessionals
          }
        }
      }
    `
  )

  const {
    scaffolding,
    headerText_serviceListing,
    featuredProfessionals,
  } = contentfulPageServicesListing
  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <ServicesListSection
          headerText={headerText_serviceListing}
          serviceCollections={
            allContentfulServiceCollectionProgramOrServiceCategory.nodes
          }
        />
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
