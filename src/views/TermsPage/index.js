import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import TermsSection from "./Sections/TermsSection"

import styles from "src/assets/jss/material-kit-react/views/termsPage"
const useStyles = makeStyles(styles)

export default function TermsPage(props) {
  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} pageTitle="Welcome" {...props}>
      <GridItem xs={12} sm={12} md={12} className={pageClasses.grid}>
        <TermsSection />
      </GridItem>
    </Layout>
  )
}
