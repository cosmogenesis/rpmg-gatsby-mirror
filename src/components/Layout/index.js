import React from "react"
//import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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

export default function Layout(props) {
  const { pageClasses, pageTitle, ...rest } = props

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <div className={pageClasses.body}>
      <Header
        metadata={site.siteMetadata}
        pageTitle={pageTitle}
        rightLinks={
          <HeaderLinksRight location={rest.location ? rest.location : "/"} />
        }
        leftLinks={
          <HeaderLinksLeft location={rest.location ? rest.location : "/"} />
        }
        fixed
        color={"secondaryBgColor"}
        changeColorOnScroll={{
          height: 400,
          color: "secondaryBgColor",
        }}
        {...props}
      />
      <Parallax
        image={require("src/assets/img/hero_rpmg_pdx_front_exterior.jpg")}
      >
        <div className={pageClasses.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(pageClasses.main, pageClasses.mainRaised)}>
        <div className={pageClasses.container}>
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
