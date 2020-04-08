import React from "react"

// material-ui components
import { makeStyles } from "@material-ui/core/styles"

import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle.js"
import styles from "src/assets/jss/material-kit-react/views/homePage/sections/promotedStaffStyle.js"
import PromotedProgramsCards from "src/components/PromotedProgramsCards"

const usePromotedStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

export default function PromotedStaffSection() {
  const classes = usePromotedStyles()
  const cardClasses = useCardStyles()

  const programs = [
    {
      name: "Opioid Cessation",
    },
    {
      name: "Clinical Psychiatric",
    },
    {
      name: "Behavioral Health",
    },
  ]

  return (
    <PromotedProgramsCards
      programs={programs}
      classes={classes}
      cardClasses={cardClasses}
      delay={false}
    />
  )
}
