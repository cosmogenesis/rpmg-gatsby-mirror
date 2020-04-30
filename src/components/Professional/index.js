import React, { useState } from "react"

// nodejs library that concatenates classes
import classNames from "classnames"

// custom Components
import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"
import ServicesList from "src/components/ServicesList"

import { Collapse, Typography } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

const getFullName = professional => {
  //let full = professional.salutation + " " hide per Joni via email
  let full = professional.firstName + " "
  full += professional.lastName
  if (professional.suffix) {
    full += ", "
    professional.suffix.forEach((s, i) => {
      full += s
      full += i < professional.suffix.length - 1 ? " " : ""
    })
  }
  return full
}

const getHeadshotPath = professional => {
  return professional.headshot ? professional.headshot.file.url : false
}

const Professional = ({ professional, classes, parentElementName, isList }) => {
  const [bioExpanded, setExpandedState] = useState(false)

  const handleExpandClick = index => {
    setExpandedState(!bioExpanded)
  }
  const headshotPath = getHeadshotPath(professional)
  const fullName = getFullName(professional)

  const rowClassNames = {
    [classes.rpmgProfessional]: true,
    "with-photo": headshotPath,
    "in-list": isList,
  }

  return (
    <GridContainer direction="row" className={classNames(rowClassNames)}>
      <GridContainer item direction="row" className="name-bio-photo-row">
        {headshotPath && (
          <GridItem className="photo">
            <img
              src={headshotPath}
              alt={"Photo of " + fullName}
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </GridItem>
        )}
        <GridContainer item direction="row" className="name-bio">
          <GridItem>
            <Typography gutterBottom variant="h5">
              {fullName}
            </Typography>
          </GridItem>
          <GridItem>
            <Collapse in={!bioExpanded} timeout="auto" unmountOnExit>
              <Typography gutterBottom variant="body1">
                {professional.bioTeaser}
              </Typography>
            </Collapse>
          </GridItem>
          <Collapse in={bioExpanded} timeout="auto" unmountOnExit>
            <div
              className="MuiTypography-body1"
              dangerouslySetInnerHTML={{
                __html: professional.bio.childMarkdownRemark.html,
              }}
            />
          </Collapse>
          <GridItem className="rpmg-learn-more-wrapper">
            <button
              className={bioExpanded ? "expandOpen" : "expandClose"}
              onClick={handleExpandClick}
              aria-expanded={bioExpanded}
              aria-label="More"
              title={"Toggle full Bio for " + fullName}
              data-analytics-label={
                "Toggle full Bio for " + fullName + " on " + parentElementName
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
        </GridContainer>
      </GridContainer>
      <ServicesList
        services={professional.services}
        classes={classes}
        parentElementName={fullName}
      />
    </GridContainer>
  )
}

export default Professional
