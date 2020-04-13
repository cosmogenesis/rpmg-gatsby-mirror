import React from "react"

// custom Components
import GridContainer from "src/components/Grid/GridContainer"
import GridItem from "src/components/Grid/GridItem"
import ServicesList from "src/components/ServicesList"

import { Typography } from "@material-ui/core"

const getFullName = professional => {
  let full = professional.salutation + " "
  full += professional.firstName + " "
  full += professional.lastName + " "
  professional.suffix.forEach((s, i) => {
    full += s
    full += i < professional.suffix.length - 1 ? ", " : ""
  })
  return full
}

const Professional = ({ professional, classes }) => {
  return (
    <GridContainer direction="column">
      <GridItem>
        <Typography gutterBottom variant="h4">
          {getFullName(professional)}
        </Typography>
      </GridItem>
      <GridItem className="rpmg-promoted-description">
        <Typography gutterBottom variant="body1">
          {professional.bioTeaser}
        </Typography>
      </GridItem>
      <ServicesList services={professional.services} classes={classes} />
    </GridContainer>
  )
}

export default Professional
