import React, { useState } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// core components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"

import { Typography, TextField, MenuItem } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/resourcesPage/sections/resourcesSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const forms = [
  {
    value: "Registration Form",
    path: "http://urltoform",
  },
  {
    value: "Authorization Form",
    path: "http://urltoform",
  },
  {
    value: "Form 2",
    path: "http://urltoform",
  },
  {
    value: "Form 3",
    path: "http://urltoform",
  },
]

export default ResourcesSection => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  const [curForm, setFormSelection] = React.useState("")

  const handleSelectChange = event => {
    setFormSelection(event.target.value)
  }

  return (
    <Card className={classes.resourcesSection}>
      <CardHeader color="primary">Patient Resources</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          <GridItem>
            <Typography variant="h4" gutterBottom>
              Download Forms
            </Typography>
            <Typography variant="body1" gutterBottom>
              Select a form to download using the select box below. The form
              will automatically download once you make your selection.
            </Typography>
          </GridItem>
          <GridItem>
            <form className="rpmg-download-form" noValidate autoComplete="off">
              <div className="rpmg-field-set">
                <TextField
                  id="rpmg-select-form"
                  fullWidth
                  select
                  label="Select Form"
                  value={curForm}
                  onChange={handleSelectChange}
                  helperText="Please select a topic"
                >
                  {forms.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </form>
          </GridItem>
          <GridItem className="rpmg-resource-listing">
            <Typography variant="h4" gutterBottom>
              Resources
            </Typography>
            <GridContainer direction="column" component="ul">
              <GridContainer item direction="row" component="li">
                <GridItem className="rpmg-resource-name">
                  Resource Name 1
                </GridItem>
                <GridItem>
                  <a
                    href="tel:1-951-275-8500"
                    title="Open in phone application"
                    target="_blank"
                  >
                    (951) 111-1234
                  </a>
                </GridItem>
              </GridContainer>
              <GridContainer item direction="row" component="li">
                <GridItem className="rpmg-resource-name">
                  Resource Name 2
                </GridItem>
                <GridItem>
                  <a
                    href="tel:1-951-275-8500"
                    title="Open in phone application"
                    target="_blank"
                  >
                    (951) 111-1235
                  </a>
                </GridItem>
              </GridContainer>
              <GridContainer item direction="row" component="li">
                <GridItem className="rpmg-resource-name">
                  Resource Name 3
                </GridItem>
                <GridItem>
                  <a
                    href="tel:1-951-275-8500"
                    title="Open in phone application"
                    target="_blank"
                  >
                    (951) 111-1236
                  </a>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  )
}
