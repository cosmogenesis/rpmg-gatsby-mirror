import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { PageScaffolding } from "src/components/QueryFragments"
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import TermsSection from "./Sections/TermsSection"

import styles from "src/assets/jss/material-kit-react/views/termsPage"
const useStyles = makeStyles(styles)

export default function TermsPage(props) {
  const { contentfulPageServicesListing } = useStaticQuery(
    graphql`
      query {
        contentfulPageServicesListing {
          scaffolding {
            ...PageScaffolding
          }
        }
      }
    `
  )

  const { scaffolding } = contentfulPageServicesListing

  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={12} md={12} className={pageClasses.grid}>
        <TermsSection />
      </GridItem>
    </Layout>
  )
}
