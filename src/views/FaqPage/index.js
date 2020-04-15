import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaqContactPage } from "src/components/QueryFragments"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "src/components/Layout"
import GridItem from "src/components/Grid/GridItem.js"

// Sections for this page
import ContactFormSection from "./Sections/ContactFormSection"
import FaqSection from "./Sections/FaqSection"

import styles from "src/assets/jss/material-kit-react/views/professionalsPage"
const useStyles = makeStyles(styles)

export default function FaqPage(props) {
  const { contentfulPageFaqContactPage } = useStaticQuery(
    graphql`
      query {
        contentfulPageFaqContactPage {
          ...FaqContactPage
        }
      }
    `
  )

  const {
    scaffolding,
    headerText_ContactUsForm,
    headerText_faqListing,
    faqs,
    instructions_contactUsForm,
    topics,
  } = contentfulPageFaqContactPage

  const pageClasses = useStyles()
  return (
    <Layout pageClasses={pageClasses} scaffolding={scaffolding} {...props}>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <FaqSection sectionHeader={headerText_faqListing} faqs={faqs} />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} className={pageClasses.grid}>
        <ContactFormSection
          sectionHeader={headerText_ContactUsForm}
          instructions={instructions_contactUsForm}
          topics={topics}
        />
      </GridItem>
    </Layout>
  )
}
