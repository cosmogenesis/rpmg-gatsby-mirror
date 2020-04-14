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

const getMobileHeroImagePath = scaffolding => {
  /** if mobile image provided use provided image
   * otherwise use contentful API to scale down */
  if (scaffolding.heroImageMobile) {
    return scaffolding.heroImageMobile.file.url
  } else {
    /** UPDATE: contentful image API is not producing images with good quality.
     * Use desktop image for mobile for now. GM */
    //return scaffolding.heroImageDesktop.fluid.src
    return scaffolding.heroImageDesktop.file.url
  }
}

export default function Layout({
  pageClasses,
  location,
  scaffolding,
  SiteVariables,
  ...rest
}) {
  const mobileHeroImagePage = getMobileHeroImagePath(scaffolding)

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
      <Parallax
        desktopImage={scaffolding.heroImageDesktop.file.url}
        mobileImage={mobileHeroImagePage}
      >
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
