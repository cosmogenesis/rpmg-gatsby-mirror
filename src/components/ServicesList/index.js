import React, { useState } from "react"
import clsx from "clsx"

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"

import { List, ListItem, ListSubheader, Collapse } from "@material-ui/core"

const ServicesList = ({
  services,
  classes,
  hideSubheader,
  parentElementName,
}) => {
  const [servicesExpanded, setExpandedState] = useState(false)

  const handleExpandClick = index => {
    setExpandedState(!servicesExpanded)
  }

  return (
    <GridContainer item spacing={0}>
      <List
        className="rpmg-list-wrapper"
        disablePadding
        subheader={
          hideSubheader ? (
            false
          ) : (
            <ListSubheader disableGutters>Services:</ListSubheader>
          )
        }
      >
        {services.map((service, i) => {
          if (i < 4) {
            return <ListItem key={i}>{service.publicName}</ListItem>
          } else return null
        })}
      </List>
      {services.length > 4 && (
        <>
          <Collapse in={servicesExpanded} timeout="auto" unmountOnExit>
            <List className="rpmg-list-wrapper" disablePadding>
              {services.map((service, i) => {
                if (i >= 4) {
                  return <ListItem key={i}>{service.publicName}</ListItem>
                } else return null
              })}
            </List>
          </Collapse>
          <GridItem className="rpmg-learn-more-wrapper">
            <button
              className={servicesExpanded ? "expandOpen" : "expandClose"}
              onClick={handleExpandClick}
              aria-expanded={servicesExpanded}
              aria-label="More"
              title="Click to see more services"
              data-analytics-label={
                "Promoted Services Component See More Services on " +
                parentElementName
              }
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
  )
}

export default ServicesList
