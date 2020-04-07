import React from "react"
import { Link } from "gatsby"

// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import logoLarge from "src/assets/img/logo_rpmg_lg.png"
import logoSmall from "src/assets/img/logo_rpmg_sm.png"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
// @material-ui/icons
import Menu from "@material-ui/icons/Menu"
// core components
import styles from "src/assets/jss/material-kit-react/components/headerStyle.js"
import { secondaryBgColor } from "src/assets/jss/material-kit-react"

const useStyles = makeStyles(styles)

export default function Header(props) {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange)
      }
    }
  })
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  })

  const brandComponent = (
    <IconButton className="rpmg-logo-wrapper">
      <Hidden only={["xs"]}>
        <Link to="/" title="Go to Home page">
          <img className="rpmg-logo-lg" src={logoLarge} alt={brand} />
        </Link>
      </Hidden>
      <Hidden smUp>
        <Link to="/" title="Go to Home page">
          <img className="rpmg-logo-sm" src={logoSmall} alt={brand} />
        </Link>
      </Hidden>
    </IconButton>
  )
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div>{leftLinks !== undefined ? leftLinks : brandComponent}</div>
        <IconButton
          className={classes.iconButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          alt="Toggle Menu"
        >
          <Menu />
        </IconButton>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={mobileOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleDrawerToggle}
      >
        <div className={classes.appResponsive}>{rightLinks}</div>
      </Drawer>
    </AppBar>
  )
}

Header.defaultProp = {
  color: secondaryBgColor,
}

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "primaryBgColor",
    "secondaryBgColor",
    "darkPrimaryColor",
    "secondaryColor",
    "tertiaryColor",
    "primaryTextColor",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "dashboard",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "primaryBgColor",
      "secondaryBgColor",
      "darkPrimaryColor",
      "secondaryColor",
      "tertiaryColor",
      "primaryTextColor",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "dashboard",
      "dark",
    ]).isRequired,
  }),
}
