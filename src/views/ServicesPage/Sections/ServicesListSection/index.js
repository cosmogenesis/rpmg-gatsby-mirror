import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// custom components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import ServiceCollection from "src/components/ServiceCollection"

import styles from "src/assets/jss/material-kit-react/views/servicesPage/sections/servicesListSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const ServicesListSection = ({ headerText, serviceCollections }) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()
  return (
    <Card className={classNames(classes.servicesListSection)}>
      <CardHeader color="primary">{headerText}</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          {serviceCollections.map((collection, i) => {
            return (
              <ServiceCollection
                key={i}
                collection={collection}
                classes={classes}
                isList={true}
              />
            )
          })}
        </GridContainer>
      </CardBody>
    </Card>
  )
}

export default ServicesListSection
