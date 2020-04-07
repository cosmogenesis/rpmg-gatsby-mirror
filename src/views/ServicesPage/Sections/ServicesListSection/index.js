import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import clsx from "clsx"
import classNames from "classnames"

// core components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"

import { Typography, List, ListItem, Collapse } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/servicesPage/sections/servicesListSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const programs = [
  {
    name: "Opioid Cessation Program",
  },
  {
    name: "Clinical Psychiatric Services",
  },
  {
    name: "Behavioral Health Services",
  },
  {
    name: "Marriage and Family Services",
  },
]

export default ServicesListSection => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  const [servicesExpanded, setExpandedState] = useState(
    programs.map(i => {
      return false
    })
  )

  const handleExpandClick = index => {
    const expandedState = servicesExpanded.map((state, i) => {
      return i === index ? !state : state
    })
    setExpandedState(expandedState)
  }

  return (
    <Card className={classNames(classes.servicesListSection)}>
      <CardHeader color="primary">Our Services and Programs</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          {programs.map((program, i) => {
            return (
              <GridContainer
                direction="row"
                key={i}
                className={classes.servicesRow}
              >
                <GridItem>
                  <Typography gutterBottom variant="h5">
                    {program.name}
                  </Typography>
                </GridItem>
                <GridItem>
                  {/**
                  <Typography gutterBottom variant="body2">
                    This is a service cartegory or program description and
                    should display no more than 3 lines of text in the component
                    in the mobile view. Aprox 120 characters.
                  </Typography>
                   */}
                </GridItem>

                <GridContainer item spacing={0} direction="row">
                  <List className="rpmg-list-wrapper" disablePadding>
                    <ListItem>Cognitive Therapy</ListItem>
                    <ListItem>Motivational Therapy</ListItem>
                    <ListItem>Relapse Prevention</ListItem>
                    <ListItem>Family Systems</ListItem>
                  </List>

                  <Collapse
                    in={servicesExpanded[i]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List className="rpmg-list-wrapper" disablePadding>
                      <ListItem>Collapsed Therapy</ListItem>
                      <ListItem>Collapsed Prevention</ListItem>
                      <ListItem>Collapsed Systems</ListItem>
                      <ListItem>Collapsed Therapy</ListItem>
                      <ListItem>Collapsed Prevention</ListItem>
                      <ListItem>Collapsed Systems</ListItem>
                      <ListItem>Collapsed Therapy</ListItem>
                      <ListItem>Collapsed Prevention</ListItem>
                      <ListItem>Collapsed Systems</ListItem>
                    </List>
                  </Collapse>
                  <GridItem className={classes.learnMoreLinkWrap}>
                    <button
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: servicesExpanded[i],
                      })}
                      onClick={function() {
                        handleExpandClick(i)
                      }}
                      aria-expanded={servicesExpanded[i]}
                      aria-label="More"
                    >
                      <GridContainer>
                        <GridItem className="linkText collapsedText">
                          More
                        </GridItem>
                        <GridItem className="linkText expandedText">
                          Less
                        </GridItem>
                        <GridItem>
                          <ArrowDropDownIcon />
                        </GridItem>
                      </GridContainer>
                    </button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            )
          })}
        </GridContainer>
      </CardBody>
    </Card>
  )
}
