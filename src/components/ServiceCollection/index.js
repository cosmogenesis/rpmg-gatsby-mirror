import React from "react"

import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"
import ServicesList from "src/components/ServicesList"

import { Typography } from "@material-ui/core"

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
          <div
            className="MuiTypography-body1"
            dangerouslySetInnerHTML={{
              __html: collection.description.childMarkdownRemark.html,
            }}
          />
        </GridItem>
      )}
      <ServicesList services={collection.services} classes={classes} />
    </GridContainer>
  )
}

export default ServiceCollection
