import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "src/components/Layout"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import PrivacySection from "./Sections/PrivacySection"

import styles from "src/assets/jss/material-kit-react/views/privacyPage"
const useStyles = makeStyles(styles)

export default function PrivacyPage(props) {
  const pageClasses = useStyles()
  return (
    <Layout pageClasses={pageClasses} pageTitle="Welcome" {...props}>
      <GridItem xs={12} sm={12} md={12} className={pageClasses.grid}>
        <PrivacySection />
      </GridItem>
    </Layout>
  )
}
