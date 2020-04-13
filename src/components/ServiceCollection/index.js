import React, { useState } from "react"
import clsx from "clsx"

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"
import ServicesList from "src/components/ServicesList"

import {
  Typography,
  List,
  ListItem,
  ListSubheader,
  Collapse,
} from "@material-ui/core"

const ServiceCollection = ({ collection, classes, isList }) => {
  return (
    <GridContainer
      direction="row"
      className={isList ? classes.servicesRow : ""}
    >
      <GridItem>
        <Typography gutterBottom variant="h4">
          {collection.publicName}
        </Typography>
      </GridItem>
      {!isList && (
        <GridItem className="rpmg-promoted-description">
          <Typography gutterBottom variant="body1">
            {collection.description.description}
          </Typography>
        </GridItem>
      )}
      <ServicesList services={collection.services} classes={classes} />
    </GridContainer>
  )
}

export default ServiceCollection
