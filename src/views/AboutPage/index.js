import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"

// @material-ui/icons

// core components
import Header from "src/components/Header/Header.js"
import Footer from "src/components/Footer/Footer.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"
import HeaderLinksRight from "src/components/Header/HeaderLinksRight.js"
import HeaderLinksLeft from "src/components/Header/HeaderLinksLeft.js"
import Parallax from "src/components/Parallax/Parallax.js"
import GlobalVars from "src/assets/js/GlobalVariables"

// Sections for this page
import PromotedStaffSection from "./Sections/PromotedStaffSection"
import AboutSection from "./Sections/AboutSection"

import styles from "src/assets/jss/material-kit-react/views/aboutPage"
const useStyles = makeStyles(styles)

export default function AboutPage(props) {
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
        image={require("src/assets/img/hero_rpmg_pdx_greek_gazebo.jpg")}
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
            className={classes.gridItem}
            spacing={6}
          >
            <GridItem xs={12} sm={6} md={6} className={classes.grid}>
              <AboutSection />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} className={classes.grid}>
              <PromotedStaffSection />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  )
}
