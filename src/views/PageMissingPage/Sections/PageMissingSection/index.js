import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// custom components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"

import styles from "src/assets/jss/material-kit-react/views/pageMissingPage/sections/pageMissingSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const PageMissingSection = ({ headerText, message }) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  return (
    <Card className={classNames(classes.pageMissingSection)}>
      <CardHeader color="primary">{headerText}</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer
          className="rpmg-content-container"
          direction="column"
          item
        >
          <div
            className="MuiTypography-body1"
            dangerouslySetInnerHTML={{
              __html: message.childMarkdownRemark.html,
            }}
          />
        </GridContainer>
      </CardBody>
    </Card>
  )
}

export default PageMissingSection
