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
import Parallax from "src/components/Parallax/Parallax.js"
// sections for this page
import HeaderLinksRight from "src/components/Header/HeaderLinksRight.js"
import HeaderLinksLeft from "src/components/Header/HeaderLinksLeft.js"
import SectionBasics from "./Sections/SectionBasics.js"
/**
import SectionNavbars from './Sections/SectionNavbars.js';
import SectionTabs from './Sections/SectionTabs.js';
import SectionPills from './Sections/SectionPills.js';
 */
import SectionNotifications from "./Sections/SectionNotifications.js"
import SectionTypography from "./Sections/SectionTypography.js"
import SectionJavascript from "./Sections/SectionJavascript.js"
import SectionCarousel from "./Sections/SectionCarousel.js"
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js"

/**
import SectionLogin from './Sections/SectionLogin.js';
import SectionExamples from './Sections/SectionExamples.js';
import SectionDownload from './Sections/SectionDownload.js';
 */
import styles from "src/assets/jss/material-kit-react/views/componentsPage"

const useStyles = makeStyles(styles)

export default function Components(props) {
  const classes = useStyles()
  const { ...rest } = props
  return (
    <div>
      <Header
        brand="Riverside Psychiatric Medical Group"
        rightLinks={<HeaderLinksRight />}
        leftLinks={<HeaderLinksLeft />}
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
            <GridItem></GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        {/*<SectionNavbars />
        <SectionTabs />
        <SectionPills />*/}
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        {/*
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={'/login-page'} className={classes.link}>
            <Button color='primary' size='lg' simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
        */}
      </div>
      <Footer />
    </div>
  )
}
