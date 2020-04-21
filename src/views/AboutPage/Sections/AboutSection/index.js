import React from "react"
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

const AboutSection = ({
  headerText_aboutUsSection,
  subheaderText_aboutUsSubsection,
  subheaderTitle_contactLinks,
  address,
  phone,
  text_aboutUs,
}) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()
  console.log(text_aboutUs)

  return (
    <Card className={classNames(classes.aboutSection)}>
      <CardHeader color="primary">{headerText_aboutUsSection}</CardHeader>
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
              {subheaderText_aboutUsSubsection}
            </Typography>
            <div
              className="MuiTypography-body1"
              dangerouslySetInnerHTML={{
                __html: text_aboutUs.childMarkdownRemark.html,
              }}
            />
          </GridItem>
          <GridItem className="rpmg-about-contact">
            <Typography variant="h4" gutterBottom>
              {subheaderTitle_contactLinks}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a
                href={
                  "https://maps.google.com/?q" + encodeURIComponent(address)
                }
                title="Open address in map application"
                target="_blank"
                rel="noopener"
              >
                <a
                  href={
                    "https://maps.apple.com/maps?q=" +
                    encodeURIComponent(address)
                  }
                  title="Open address in map application"
                  target="_blank"
                  rel="noopener"
                >
                  {address}
                </a>
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a
                href={"tel:" + phone}
                title={"Open in phone application and call " + phone}
                target="_blank"
                rel="noopener"
              >
                {phone}
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

export default AboutSection
