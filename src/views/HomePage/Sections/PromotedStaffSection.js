import React from "react"

// material-ui components
import { makeStyles } from "@material-ui/core/styles"

import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle.js"
import styles from "src/assets/jss/material-kit-react/views/homePage/sections/promotedStaffStyle.js"
import PromotedStaffCards from "src/components/PromotedStaffCards"

const usePromotedStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

export default function PromotedStaffSection({ featuredProfessionals }) {
  const classes = usePromotedStyles()
  const cardClasses = useCardStyles()

  return (
    <PromotedStaffCards
      featured={featuredProfessionals}
      classes={classes}
      cardClasses={cardClasses}
      delay={true}
    />
  )
}
