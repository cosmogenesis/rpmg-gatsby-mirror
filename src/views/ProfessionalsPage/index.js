import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  PageScaffolding,
  FeaturedServicesCollections,
} from "src/components/QueryFragments"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "src/components/Layout"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import PromotedProgramsSection from "./Sections/PromotedProgramsSection"
import ProfessionalsListSection from "./Sections/ProfessionalsListSection"

import styles from "src/assets/jss/material-kit-react/views/professionalsPage"
const useStyles = makeStyles(styles)

export default function ProfessionalsPage(props) {
  const { contentfulPageProfessionalsListing } = useStaticQuery(
    graphql`
      query {
        contentfulPageProfessionalsListing {
          scaffolding {
            ...PageScaffolding
          }
          featuredServices {
            ...FeaturedServicesCollections
          }
        }
      }
    `
  )

  const { scaffolding, featuredServices } = contentfulPageProfessionalsListing

  const pageClasses = useStyles()
  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <ProfessionalsListSection />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedProgramsSection
          siteVariables={props.siteVariables}
          featuredServices={featuredServices}
        />
      </GridItem>
    </Layout>
  )
}
