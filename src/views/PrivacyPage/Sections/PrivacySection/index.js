import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

// custome components
import Card from "src/components/Card/Card.js"
import CardBody from "src/components/Card/CardBody.js"
import CardHeader from "src/components/Card/CardHeader.js"
import GridContainer from "src/components/Grid/GridContainer.js"

import styles from "src/assets/jss/material-kit-react/views/privacyPage/sections/privacySectionStyles"
import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle"
const useStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

const PrivacyPolicySection = ({
  headerText_privacyPolicySection,
  text_privacyPolicy,
}) => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  return (
    <Card className={classNames(classes.privacyPolicySection)}>
      <CardHeader color="primary">{headerText_privacyPolicySection}</CardHeader>
      <CardBody
        className={classNames(
          "cardBody",
          classes.cardBody,
          cardClasses.cardBody
        )}
      >
        <GridContainer
          className="rpmg-content-container"
          direction="column"
          item
        >
          <div
            className="MuiTypography-body1"
            dangerouslySetInnerHTML={{
              __html: text_privacyPolicy.childMarkdownRemark.html,
            }}
          />
        </GridContainer>
      </CardBody>
    </Card>
  )
}

export default PrivacyPolicySection
