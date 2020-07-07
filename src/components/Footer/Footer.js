/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
// material-ui core components
import { List, ListItem } from "@material-ui/core"
import Button from "src/components/CustomButtons/Button.js"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

import { makeStyles } from "@material-ui/core/styles"

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite"

import styles from "src/assets/jss/material-kit-react/components/footerStyle.js"

const useStyles = makeStyles(styles)

export default function Footer(props) {
  const classes = useStyles()
  const { whiteFont } = props

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    return true
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/terms/"
                className={classes.block}
                title="Navigate to Terms page"
                data-analytics-label="Footer Terms Link"
              >
                Terms
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/privacy/"
                className={classes.block}
                title="Navigate to Privacy page"
                data-analytics-label="Footer Privacy Link"
              >
                Privacy
              </a>
            </ListItem>
          </List>
        </div>
        <Button
          color="primary"
          justIcon
          className="rpmg-backtotop-button"
          title="Click to scroll back to top of page"
          data-analytics-label="Footer back to top button"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon
            alt="Click to scroll back to top of page"
            data-analytics-label="Footer back to top button"
          />
        </Button>
        <div className={classNames(classes.right, classes.copy)}>
          &copy; {1900 + new Date().getYear()} RPMG
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
}
