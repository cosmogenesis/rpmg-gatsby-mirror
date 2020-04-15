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

import { Typography, Collapse } from "@material-ui/core"

import styles from "src/assets/jss/material-kit-react/views/faqPage/sections/faqSectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const faqs = [
  {
    question: "Does RPMG provide marriage and family counciling?",
    answer:
      "Yes, please see our Marriage and Family Counciling services on the services listing page for more information.",
  },
  {
    question: "Does RPMG have a drug management program?",
    answer:
      "Yes, please see our Drug Management services on the services listing page for more information.",
  },
  {
    question: "How long has RPMG been in business?",
    answer: "We have been in business for over 20 years.",
  },
]

const FaqSection = ({ sectionHeader, faqs }) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  const [questionsExpanded, setExpandedState] = useState(
    faqs.map(i => {
      return false
    })
  )

  const handleExpandClick = index => {
    const expandedState = questionsExpanded.map((state, i) => {
      return i === index ? !state : state
    })
    setExpandedState(expandedState)
  }

  return (
    <Card className={classNames(classes.faqSection)}>
      <CardHeader color="primary">{sectionHeader}</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer direction="column">
          {faqs.map((faq, i) => {
            return (
              <GridContainer
                direction="row"
                key={i}
                className={"rpmg-question-row "}
                item
              >
                <GridItem className="rpmg-question-wrapper">
                  <Typography
                    variant="body1"
                    onClick={function() {
                      handleExpandClick(i)
                    }}
                  >
                    <ArrowDropDownIcon />
                    <span>{faq.question}</span>
                  </Typography>
                </GridItem>
                <Collapse
                  in={questionsExpanded[i]}
                  timeout="auto"
                  unmountOnExit
                >
                  <GridItem
                    className={
                      "rpmg-answer-wrapper " +
                      clsx(classes.expand, {
                        [classes.expandOpen]: questionsExpanded[i],
                      })
                    }
                  >
                    <Typography variant="body1">{faq.answer.answer}</Typography>
                  </GridItem>
                </Collapse>
              </GridContainer>
            )
          })}
        </GridContainer>
      </CardBody>
    </Card>
  )
}

export default FaqSection
