import React, { useState } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// core components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"

import { Typography } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/aboutPage/sections/aboutSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

export default AboutSection => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  return (
    <Card className={classNames(classes.aboutSection)}>
      <CardHeader color="primary">About Us</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          <GridItem className="rpmg-about-description">
            <Typography variant="h4" gutterBottom>
              What Makes Us Special
            </Typography>
            <Typography variant="body1" gutterBottom>
              Riverside Psychiatric Medical Group is a premier psychiatric
              medical group in the Inland Empire founded by Robert B. Summerour,
              M.D. in 1982.
            </Typography>
            <Typography variant="body1" gutterBottom>
              The group offers a full spectrum of out-patient mental health
              services provided by psychiatrists, psychologists and LSCW and MFT
              counselors. The clinicians work in collaboration to provide
              comprehensive treatment to our patients, their families and the
              community. Services provided include psychiatric evaluation and
              treatment, medication management, addiction detoxification, child
              and adolescent psychological testing and treatment,
              neuropsychological testing and geriatric issues.{" "}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Inpatient, partial hospitalization and intensive outpatient
              treatment is provided through collaboration with the psychiatric
              and chemical dependency inpatient facility located in close
              proximity to Riverside Psychiatric Medical Group.
            </Typography>
          </GridItem>
          <GridItem className="rpmg-about-contact">
            <Typography variant="h4" gutterBottom>
              Say Hello
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a
                href="https://maps.google.com/?q=5887%20Brockton%20Ave%2C%20Riverside%2C%20CA%2092506"
                title="Open address in map application"
                target="_blank"
              >
                <a
                  href="https://maps.apple.com/maps?q=5887%20Brockton%20Ave%2C%20Riverside%2C%20CA%2092506"
                  title="Open address in map application"
                  target="_blank"
                >
                  5887 Brockton Ave, Riverside, CA 92506
                </a>
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a
                href="tel:1-951-275-8500"
                title="Open in phone application"
                target="_blank"
              >
                (951) 275-8500
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link to="/faq" title="Go to contact us page">
                Contact Us
              </Link>
            </Typography>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  )
}
