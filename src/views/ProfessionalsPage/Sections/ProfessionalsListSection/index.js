import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// custom components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import Professional from "src/components/Professional"

import styles from "src/assets/jss/material-kit-react/views/professionalsPage/sections/professionalsListSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const ProfessionalsListSection = ({ professionals, headerText }) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  return (
    <Card className={classNames(classes.professionalsListSection)}>
      <CardHeader color="primary">{headerText}</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          {professionals.map((professional, i) => {
            return (
              <Professional
                key={i}
                professional={professional}
                classes={classes}
                useTeaser={false}
              />
            )
          })}
        </GridContainer>
      </CardBody>
    </Card>
  )
}

export default ProfessionalsListSection
