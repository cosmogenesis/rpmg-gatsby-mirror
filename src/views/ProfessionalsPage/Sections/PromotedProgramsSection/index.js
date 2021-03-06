import React from "react"

// material-ui components
import { makeStyles } from "@material-ui/core/styles"

import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle.js"
import styles from "src/assets/jss/material-kit-react/views/homePage/sections/promotedProgramsStyle.js"
import PromotedProgramsCards from "src/components/PromotedProgramsCards"

const usePromotedStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

export default function PromotedProgramsSection({
  featuredServices,
  siteVariables,
}) {
  const classes = usePromotedStyles()
  const cardClasses = useCardStyles()

  return (
    <PromotedProgramsCards
      headerText={siteVariables.headerText_featuredServices}
      actionButtonText={siteVariables.buttonText_featuredServices}
      featured={featuredServices}
      classes={classes}
      cardClasses={cardClasses}
      delay={false}
    />
  )
}
