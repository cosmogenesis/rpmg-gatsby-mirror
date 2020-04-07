import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import PromotedProgramsSection from "./Sections/PromotedProgramsSection.js"
import PromotedStaffSection from "./Sections/PromotedStaffSection.js"

import styles from "src/assets/jss/material-kit-react/views/homePage"
const useStyles = makeStyles(styles)

export default function HomePage(props) {
  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} pageTitle="Welcome" {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedProgramsSection />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedStaffSection />
      </GridItem>
    </Layout>
  )
}
