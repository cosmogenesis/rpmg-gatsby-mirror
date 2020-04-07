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

import {
  Typography,
  List,
  ListItem,
  ListSubheader,
  Collapse,
} from "@material-ui/core"

import image from "src/assets/img/faces/avatar.jpg"

import styles from "src/assets/jss/material-kit-react/views/professionalsPage/sections/professionalsListSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const professionals = [
  {
    name: "Dr. Sukh Kalsa",
    photo: true,
  },
  {
    name: "Dr. Bruce Heischober",
    photo: true,
  },
  {
    name: "Dr. Robert Summerour",
    photo: false,
  },
  { name: "Christianne Zah", photo: true },
]

export default ProfessionalsListSection => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  const [servicesExpanded, setExpandedState] = useState(
    professionals.map(i => {
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
    <Card className={classNames(classes.professionalsListSection)}>
      <CardHeader color="primary">Our Health Professionals</CardHeader>
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
              <GridContainer
                direction="row"
                key={i}
                className={
                  "professional-row " + (professional.photo ? "with-photo" : "")
                }
              >
                <GridContainer
                  item
                  direction="row"
                  className="name-bio-photo-row"
                >
                  <GridItem className="photo">
                    {professional.photo && (
                      <img
                        src={image}
                        alt={"Photo of " + professional.name}
                        className={
                          classes.imgRoundedCircle + " " + classes.imgFluid
                        }
                      />
                    )}
                  </GridItem>
                  <GridContainer item direction="row" className="name-bio">
                    <GridItem>
                      <Typography gutterBottom variant="h5">
                        {professional.name}
                      </Typography>
                    </GridItem>
                    <GridItem>
                      <Typography gutterBottom variant="body2">
                        This is a staff bio and should display aprox 3 lines of
                        text in the component in the mobile view. Aprox 120
                        characters.
                      </Typography>
                    </GridItem>
                  </GridContainer>
                </GridContainer>
                <GridContainer item spacing={0} direction="row">
                  <List
                    className="rpmg-list-wrapper"
                    disablePadding
                    subheader={
                      <ListSubheader disableGutters>Services:</ListSubheader>
                    }
                  >
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
