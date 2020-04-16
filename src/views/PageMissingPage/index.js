/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageMissingPageFragment from "src/components/QueryFragments"

import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import PageMissingSection from "./Sections/PageMissingSection"

import styles from "src/assets/jss/material-kit-react/views/homePage"
const useStyles = makeStyles(styles)

export default function PageMissingPage(props) {
  const { contentfulPagePageMissing404Page } = useStaticQuery(
    graphql`
      query {
        contentfulPagePageMissing404Page {
          ...PageMissingPageFragment
        }
      }
    `
  )

  const { scaffolding, ...rest } = contentfulPagePageMissing404Page

  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <>
        <GridItem xs={12} sm={12} md={12} className={pageClasses.grid}>
          <PageMissingSection {...rest} />
        </GridItem>
      </>
    </Layout>
  )
}
