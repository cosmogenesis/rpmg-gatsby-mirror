import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import clsx from "clsx"
import classNames from "classnames"

// core components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"

import { Typography } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/termsPage/sections/termsSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

export default TermsSection => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  return (
    <Card className={classNames(classes.termsPolicySection)}>
      <CardHeader color="primary">Terms & Conditions</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column" item>
          <Typography variant="h5">Page Missing</Typography>
          <Typography variant="body1">The page is missing</Typography>
        </GridContainer>
      </CardBody>
    </Card>
  )
}
