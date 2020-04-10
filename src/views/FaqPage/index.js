import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  PageScaffolding,
  FeaturedServicesCollections,
  FeaturedProfessionals,
} from "src/components/QueryFragments"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "src/components/Layout"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import ContactFormSection from "./Sections/ContactFormSection"
import FaqSection from "./Sections/FaqSection"

import styles from "src/assets/jss/material-kit-react/views/professionalsPage"
const useStyles = makeStyles(styles)

export default function FaqPage(props) {
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
        <FaqSection />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <ContactFormSection />
      </GridItem>
    </Layout>
  )
}
