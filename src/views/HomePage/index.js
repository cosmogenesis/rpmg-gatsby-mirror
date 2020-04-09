import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import GridItem from "src/components/Grid/GridItem.js"
import Layout from "src/components/Layout"

// Sections for this page
import PromotedProgramsSection from "./Sections/PromotedProgramsSection.js"
import PromotedStaffSection from "./Sections/PromotedStaffSection.js"

import styles from "src/assets/jss/material-kit-react/views/homePage"
const useStyles = makeStyles(styles)

export default function HomePage(props) {
  const { allContentfulPageHomepage } = useStaticQuery(
    graphql`
      query {
        allContentfulPageHomepage {
          nodes {
            scaffolding {
              seoDescription
              seoPageTitle
              keywords
              heroImageDesktop {
                file {
                  url
                }
              }
              heroImageMobile {
                file {
                  url
                }
              }
            }
            featuredServices {
              serviceCollections {
                description {
                  description
                }
                publicName
                services {
                  publicName
                }
              }
              headerText
            }
            featuredProfessionals {
              professionals {
                bioTeaser
                salutation
                lastName
                firstName
                suffix
                services {
                  publicName
                }
              }
              headerText
            }
          }
        }
      }
    `
  )

  const {
    scaffolding,
    featuredProfessionals,
    featuredServices,
  } = allContentfulPageHomepage.nodes[0]

  const pageClasses = useStyles()

  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedProgramsSection featuredServices={featuredServices} />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <PromotedStaffSection featuredProfessionals={featuredProfessionals} />
      </GridItem>
    </Layout>
  )
}
