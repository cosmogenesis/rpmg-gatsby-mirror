import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"

// custom Components
import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"
import ServicesList from "src/components/ServicesList"

import { Typography } from "@material-ui/core"

const getFullName = professional => {
  let full = professional.salutation + " "
  full += professional.firstName + " "
  full += professional.lastName + ", "
  professional.suffix.forEach((s, i) => {
    full += s
    full += i < professional.suffix.length - 1 ? " " : ""
  })
  return full
}

const getHeadshotPath = professional => {
  return professional.headshot ? professional.headshot.file.url : false
}

const Professional = ({ professional, classes, useTeaser }) => {
  const headshotPath = getHeadshotPath(professional)
  const fullName = getFullName(professional)
  const rowClassNames = {
    [classes.rpmgProfessional]: true,
    "with-photo": headshotPath,
    "in-list": !useTeaser,
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
            <Typography gutterBottom variant="body1">
              {useTeaser ? professional.bioTeaser : professional.bio.bio}
            </Typography>
          </GridItem>
        </GridContainer>
      </GridContainer>
      <ServicesList services={professional.services} classes={classes} />
    </GridContainer>
  )
}

export default Professional
