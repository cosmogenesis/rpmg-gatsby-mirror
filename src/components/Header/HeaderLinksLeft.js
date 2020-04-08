import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Button from "src/components/CustomButtons/Button.js"

import styles from "src/assets/jss/material-kit-react/components/headerLeftLinksStyle.js"

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/services"
          color="transparent"
          className={classes.navLink}
          title="Go to Services listing page"
        >
          Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/staff"
          title="Go to Staff listing page"
          color="transparent"
          className={classes.navLink}
        >
          Staff
        </Button>
      </ListItem>
    </List>
  )
}
