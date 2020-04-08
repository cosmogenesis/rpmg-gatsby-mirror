import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import Layout from "src/components/Layout"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import PromotedStaffSection from "./Sections/PromotedStaffSection"
import AboutSection from "./Sections/AboutSection"

import styles from "src/assets/jss/material-kit-react/views/aboutPage"
const useStyles = makeStyles(styles)

export default function AboutPage(props) {
  const pageClasses = useStyles()
  return (
    <Layout pageClasses={pageClasses} pageTitle="Welcome" {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <AboutSection />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedStaffSection />
      </GridItem>
    </Layout>
  )
}
