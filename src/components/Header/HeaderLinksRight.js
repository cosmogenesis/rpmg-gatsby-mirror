import React from "react"

// @material-ui/core components
import { List, MenuItem } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// core components
import Button from "src/components/CustomButtons/Button.js"

import styles from "src/assets/jss/material-kit-react/components/headerRightLinksStyle.js"

const useStyles = makeStyles(styles)

export default function HeaderLinksRight(props) {
  const classes = useStyles()
  const { location } = props

  return (
    <List className={classes.rightNavList}>
      <MenuItem disableGutters selected={location.pathname === "/"}>
        <Button href="/" color="transparent" title="Go to Home page">
          Home
        </Button>
      </MenuItem>
      <MenuItem disableGutters selected={location.pathname.match("/resources")}>
        <Button
          href="/resources"
          color="transparent"
          title="Go to Patient Resources page"
        >
          Patient Resources
        </Button>
      </MenuItem>
      <MenuItem disableGutters selected={location.pathname.match("/faq")}>
        <Button href="/faq" color="transparent" title="Go to FAQ page">
          FAQ
        </Button>
      </MenuItem>
      <MenuItem disableGutters selected={location.pathname.match("/about")}>
        <Button href="/about" color="transparent" title="Go to About Us page">
          About Us
        </Button>
      </MenuItem>
    </List>
  )
}
