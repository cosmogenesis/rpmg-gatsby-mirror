import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { PageScaffolding } from "src/components/QueryFragments"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "src/components/Layout"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import PrivacySection from "./Sections/PrivacySection"

import styles from "src/assets/jss/material-kit-react/views/privacyPage"
const useStyles = makeStyles(styles)

export default function PrivacyPage(props) {
  const { contentfulPagePrivacyPolicy } = useStaticQuery(
    graphql`
      query {
        contentfulPagePrivacyPolicy {
          scaffolding {
            ...PageScaffolding
          }
        }
      }
    `
  )

  const { scaffolding } = contentfulPagePrivacyPolicy

  const pageClasses = useStyles()
  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={12} md={12} className={pageClasses.grid}>
        <PrivacySection />
      </GridItem>
    </Layout>
  )
}
