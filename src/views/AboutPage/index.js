import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  PageScaffolding,
  FeaturedProfessionals,
} from "src/components/QueryFragments"

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
  const { contentfulPageAboutUs } = useStaticQuery(
    graphql`
      query {
        contentfulPageAboutUs {
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

  const { scaffolding, featuredProfessionals } = contentfulPageAboutUs
  const pageClasses = useStyles()
  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <AboutSection />
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
