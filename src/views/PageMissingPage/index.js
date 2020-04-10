import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { PageScaffolding } from "src/components/QueryFragments"

import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import PageMissingSection from "./Sections/PageMissingSection"

import styles from "src/assets/jss/material-kit-react/views/homePage"
const useStyles = makeStyles(styles)

export default function HomePage(props) {
  const { contentfulPageHomepage } = useStaticQuery(
    graphql`
      query {
        contentfulPageHomepage {
          scaffolding {
            ...PageScaffolding
          }
          featuredServices {
            ...FeaturedServicesCollections
          }
          featuredProfessionals {
            ...FeaturedProfessionals
          }
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
        <GridItem xs={12} sm={12} md={12} className={pageClasses.grid}>
          <PageMissingSection
            siteVariables={props.siteVariables}
            featuredServices={featuredServices}
          />
        </GridItem>
      </>
    </Layout>
  )
}
