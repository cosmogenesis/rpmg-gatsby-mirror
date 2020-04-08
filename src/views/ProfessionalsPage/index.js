import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "src/components/Layout"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import PromotedProgramsSection from "./Sections/PromotedProgramsSection"
import ProfessionalsListSection from "./Sections/ProfessionalsListSection"

import styles from "src/assets/jss/material-kit-react/views/professionalsPage"
const useStyles = makeStyles(styles)

export default function ProfessionalsPage(props) {
  const pageClasses = useStyles()
  return (
    <Layout pageClasses={pageClasses} pageTitle="Welcome" {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <ProfessionalsListSection />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedProgramsSection />
      </GridItem>
    </Layout>
  )
}
