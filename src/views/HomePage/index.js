/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HomePageFragment } from "src/components/QueryFragments"

import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import PromotedProgramsSection from "./Sections/PromotedProgramsSection.js"
import PromotedStaffSection from "./Sections/PromotedStaffSection.js"

import styles from "src/assets/jss/material-kit-react/views/homePage"
const useStyles = makeStyles(styles)

export default function HomePage(props) {
  const { contentfulPageHomepage } = useStaticQuery(
    graphql`
      query {
        contentfulPageHomepage {
          ...HomePageFragment
        }
      }
    `
  )

  const {
    scaffolding,
    featuredProfessionals,
    featuredServices,
  } = contentfulPageHomepage

  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <>
        <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
          <PromotedProgramsSection
            siteVariables={props.siteVariables}
            featuredServices={featuredServices}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
          <PromotedStaffSection
            siteVariables={props.siteVariables}
            featuredProfessionals={featuredProfessionals}
          />
        </GridItem>
      </>
    </Layout>
  )
}
