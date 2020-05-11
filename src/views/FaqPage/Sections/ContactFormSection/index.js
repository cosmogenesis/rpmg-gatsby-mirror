import React, { useState, useRef } from "react"
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

const ContactFormSection = ({ sectionHeader, topics, instructions }) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()
  const commentField = useRef()

  const [value, setValue] = useState("")

  const handleChange = event => {
    setValue(event.target.value)
  }

  const [topic, setSelectionOption] = useState("")

  const handleSelectChange = event => {
    setSelectionOption(event.target.value)
  }

  const initiateEmail = () => {
    if (!document) return

    const link = document.createElement("a")
    let path = "mailto:" + topics[topic].email
    path +=
      "?subject=" + encodeURI("Question regarding: " + topics[topic].topic)
    path += "&body=" + encodeURI(commentField.current.value)
    link.href = path
    link.setAttribute(
      "data-analytics-label",
      "Contact Form Message Regarding: " + topics[topic].topic
    )
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className={classNames(classes.contactFormSection)}>
      <CardHeader color="primary">{sectionHeader}</CardHeader>
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
              {instructions}
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
                  {topics.map((option, i) => (
                    <MenuItem key={option.topic} value={i}>
                      {option.topic}
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
                  inputRef={commentField}
                />
              </div>
              <CustomButton
                color="primary"
                className="rpmg-contact-submit"
                onClick={initiateEmail}
              >
                Send
              </CustomButton>
            </form>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  )
}

export default ContactFormSection
