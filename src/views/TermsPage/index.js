/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TermsPageFragment } from "src/components/QueryFragments"
import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import TermsSection from "./Sections/TermsSection"

import styles from "src/assets/jss/material-kit-react/views/termsPage"
const useStyles = makeStyles(styles)

export default function TermsPage(props) {
  const { contentfulPageTermsConditions } = useStaticQuery(
    graphql`
      query {
        contentfulPageTermsConditions {
          ...TermsPageFragment
        }
      }
    `
  )

  const { scaffolding, ...rest } = contentfulPageTermsConditions

  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={12} md={12} className={pageClasses.grid}>
        <TermsSection {...rest} />
      </GridItem>
    </Layout>
  )
}
