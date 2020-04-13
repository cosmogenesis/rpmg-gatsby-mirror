import React, { useState } from "react"
import clsx from "clsx"

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"

import {
  Typography,
  List,
  ListItem,
  ListSubheader,
  Collapse,
} from "@material-ui/core"

const ServiceCollection = ({ collection, classes, isList }) => {
  const [servicesExpanded, setExpandedState] = useState(false)

  const handleExpandClick = index => {
    setExpandedState(!servicesExpanded)
  }

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

      <GridContainer item spacing={0}>
        <List
          className="rpmg-list-wrapper"
          disablePadding
          subheader={<ListSubheader disableGutters>Services:</ListSubheader>}
        >
          {collection.services.map((service, i) => {
            if (i < 4) {
              return <ListItem key={i}>{service.publicName}</ListItem>
            }
          })}
        </List>
        {collection.services.length > 4 && (
          <>
            <Collapse in={servicesExpanded} timeout="auto" unmountOnExit>
              <List className="rpmg-list-wrapper" disablePadding>
                {collection.services.map((service, i) => {
                  if (i >= 4) {
                    return <ListItem key={i}>{service.publicName}</ListItem>
                  }
                })}
              </List>
            </Collapse>
            <GridItem className={classes.learnMoreLinkWrap}>
              <button
                className={clsx(classes.expand, {
                  [classes.expandOpen]: servicesExpanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={servicesExpanded}
                aria-label="More"
              >
                <GridContainer>
                  <GridItem className="linkText collapsedText">More</GridItem>
                  <GridItem className="linkText expandedText">Less</GridItem>
                  <GridItem>
                    <ArrowDropDownIcon />
                  </GridItem>
                </GridContainer>
              </button>
            </GridItem>
          </>
        )}
      </GridContainer>
    </GridContainer>
  )
}

export default ServiceCollection
