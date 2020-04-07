import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// core components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import CustomButton from "src/components/CustomButtons/Button.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"

import { Typography, TextField, MenuItem } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/faqPage/sections/contactFormSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const topics = [
  {
    value: "Marriage and Family Services",
    email: "joni@att.com",
  },
  {
    value: "Drug Treatment Services",
    email: "joni@att.com",
  },
  {
    value: "Mental Illness Services",
    email: "test@gmail.com",
  },
  {
    value: "Administration",
    email: "joni@att.com",
  },
]

export default ContactFormSection => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  const [value, setValue] = React.useState("")

  const handleChange = event => {
    setValue(event.target.value)
  }

  const [topic, setSelectionOption] = React.useState()

  const handleSelectChange = event => {
    setSelectionOption(event.target.value)
  }

  return (
    <Card className={classNames(classes.contactFormSection)}>
      <CardHeader color="primary">Contact Us</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          <GridItem>
            <Typography variant="body1" gutterBottom>
              If your questions were not answer in the FAQ section on this page
              then please select a topic in the form below and submit your
              question. By selecting a topic, your question will be routed to
              the correct person. We will respond in 24 - 48 hours.
            </Typography>
          </GridItem>
          <GridItem>
            <form className="rpmg-contact-form" noValidate autoComplete="off">
              <div className="rpmg-field-set">
                <TextField
                  id="rpmg-select-topic"
                  select
                  fullWidth
                  label="Select Topic"
                  value={topic}
                  onChange={handleSelectChange}
                  helperText="Please select a topic"
                >
                  {topics.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="rpmg-field-set">
                <TextField
                  id="rpmg-multiline-flexible"
                  label="Comment"
                  multiline
                  rowsMax="6"
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <CustomButton color="primary" className="rpmg-contact-submit">
                Send
              </CustomButton>
            </form>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  )
}
