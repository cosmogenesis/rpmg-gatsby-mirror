import React from "react"
//import PropTypes from "prop-types"

// nodejs library that concatenates pageClasses
import classNames from "classnames"
// @material-ui/core components

// core components
import Header from "src/components/Header/Header.js"
import Footer from "src/components/Footer/Footer.js"
import GridContainer from "src/components/Grid/GridContainer.js"
import GridItem from "src/components/Grid/GridItem.js"
import HeaderLinksRight from "src/components/Header/HeaderLinksRight.js"
import HeaderLinksLeft from "src/components/Header/HeaderLinksLeft.js"
import Parallax from "src/components/Parallax/Parallax.js"
import { siteVariables } from "../QueryFragments"

export default function Layout({
  pageClasses,
  location,
  scaffolding,
  SiteVariables,
  ...rest
}) {
  //const isMobile = useDetectMobile()

  return (
    <div className={pageClasses.body}>
      <Header
        rightLinks={<HeaderLinksRight location={location} />}
        leftLinks={<HeaderLinksLeft location={location} />}
        fixed
        color={"secondaryBgColor"}
        changeColorOnScroll={{
          height: 400,
          color: "secondaryBgColor",
        }}
        scaffolding={scaffolding}
        SiteVariables={siteVariables}
        {...rest}
      />
      <Parallax image={scaffolding.heroImageDesktop.file.url}>
        <div className={pageClasses.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(pageClasses.main, pageClasses.mainRaised)}>
        <div className={pageClasses.container}>
          <GridContainer justify="center" spacing={6}>
            {rest.children}
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  )
}
