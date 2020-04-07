import React from "react"

// material-ui components
import { makeStyles } from "@material-ui/core/styles"

import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle.js"
import styles from "src/assets/jss/material-kit-react/views/homePage/sections/promotedProgramsStyle.js"
import PromotedProgramsCards from "src/components/PromotedProgramsCards"

const usePromotedStyles = makeStyles(styles)
const useCardStyles = makeStyles(cardStyles)

export default function PromotedStaffSection() {
  const classes = usePromotedStyles()
  const cardClasses = useCardStyles()

  const carouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
  }

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
      carouselSettings={carouselSettings}
      classes={classes}
      cardClasses={cardClasses}
      delay={0}
    />
  )
}
