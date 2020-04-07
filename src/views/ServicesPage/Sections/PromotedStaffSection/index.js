import React from "react"

// material-ui components
import { makeStyles } from "@material-ui/core/styles"

import cardStyles from "src/assets/jss/material-kit-react/components/cardStyle.js"
import styles from "src/assets/jss/material-kit-react/views/homePage/sections/promotedStaffStyle.js"
import PromotedStaffCards from "src/components/PromotedStaffCards"

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

  const staff = [
    {
      name: "Dr. Sukh Kalsa",
    },
    {
      name: "Dr. Bruce Heischober",
    },
    {
      name: "Dr. Robert Summerour",
    },
  ]

  return (
    <PromotedStaffCards
      staff={staff}
      carouselSettings={carouselSettings}
      classes={classes}
      cardClasses={cardClasses}
      delay={carouselSettings.autoplaySpeed / 2}
    />
  )
}
