/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iF]ragment" }]*/

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ProfessionalsPageFragment,
  ProfessionalFragment,
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
  const {
    contentfulPageProfessionalsListing,
    lead,
    doctors,
    otherProfessionals,
  } = useStaticQuery(
    graphql`
      query {
        contentfulPageProfessionalsListing {
          ...ProfessionalsPageFragment
        }
        lead: allContentfulProfessional(
          filter: { lastName: { eq: "Summerour" } }
        ) {
          nodes {
            ...ProfessionalFragment
          }
        }
        doctors: allContentfulProfessional(
          filter: { suffix: { in: ["PhD", "DNP"] } }
          sort: { fields: [lastName], order: ASC }
        ) {
          nodes {
            ...ProfessionalFragment
          }
        }
        otherProfessionals: allContentfulProfessional(
          filter: { suffix: { nin: ["MD", "PhD", "DNP"] } }
          sort: { fields: [lastName], order: ASC }
        ) {
          nodes {
            ...ProfessionalFragment
          }
        }
      }
    `
  )

  const {
    scaffolding,
    professionalsListingHeaderTitle,
    featuredServices,
  } = contentfulPageProfessionalsListing

  const pageClasses = useStyles()

  let allProfessionals = lead.nodes.concat(doctors.nodes)
  allProfessionals = allProfessionals.concat(otherProfessionals.nodes)

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <ProfessionalsListSection
          headerText={professionalsListingHeaderTitle}
          professionals={allProfessionals}
        />
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
