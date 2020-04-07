import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"

// core components
import Header from "src/components/Header/Header.js"
import Footer from "src/components/Footer/Footer.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"
import HeaderLinksRight from "src/components/Header/HeaderLinksRight.js"
import HeaderLinksLeft from "src/components/Header/HeaderLinksLeft.js"
import Parallax from "src/components/Parallax/Parallax.js"
import GlobalVars from "src/assets/js/GlobalVariables"

import styles from "src/assets/jss/material-kit-react/views/homePage"
const useStyles = makeStyles(styles)

export default function Layout(props) {
  const classes = useStyles()
  const { ...rest } = props

  return (
    <div className={classes.body}>
      <Header
        brand={GlobalVars.siteTitle}
        rightLinks={<HeaderLinksRight location={rest.location} />}
        leftLinks={<HeaderLinksLeft location={rest.location} />}
        fixed
        color={"secondaryBgColor"}
        changeColorOnScroll={{
          height: 400,
          color: "secondaryBgColor",
        }}
        {...rest}
      />
      <Parallax
        image={require("src/assets/img/hero_rpmg_pdx_front_exterior.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer
            justify="center"
            className="rpmg-content-container"
            spacing={6}
          >
            {props.children}
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  )
}
