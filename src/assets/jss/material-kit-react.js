/*!

 =========================================================
 * Material Kit React - v1.8.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const darkPrimaryColor = "#2b3990" /* dark blue */
const darkPrimaryColorRGB = "43, 57, 144"

const lightPrimaryColor = "#1b75bc" /* light blue */
const lightPrimaryColorRGB = "27, 117, 188"
const lightPrimaryGradient = "#2259a8"

const primaryColor = lightPrimaryColor
const secondaryColor = "#efe8d3" /* tan */
const secondaryColorRGB = "239, 232, 211"
const darkSecondaryColor = "#dbcb9b" /* dark tan */
const darkSecondaryColorRGB = "219, 203, 155"
const tertiaryColor = "#afdbba" /* mint */
const warningColor = "#da353f"
const dangerColor = "#ba222b"
const successColor = "#77ba22"
const infoColor = "#22bab1"
const dashboardColor = tertiaryColor /* '#e91e63';*/
const rowBgColor = "#badbf5"
const grayColor = "#e9e9e9" /** used as odd row background */

/** background colors */
const primaryBgColor = darkSecondaryColor
const secondaryBgColor = secondaryColor
const tertiaryBgColor = "#fff"

const primaryTextColor = "#414042"
const secondaryTextColor = "#ffffff"

const drawerWidth = 260

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
}

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
}
const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
}

const appMinWidth = {
  minWidth: "320px",
}

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
}

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: secondaryTextColor,
}

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
}

const lightPrimaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    lightPrimaryColorRGB +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    lightPrimaryColorRGB +
    ", 0.2)",
}
const primaryBoxShadow = lightPrimaryBoxShadow

const secondaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    secondaryColorRGB +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    secondaryColorRGB +
    ", 0.2)",
}

const darkSecondaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    darkSecondaryColorRGB +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    darkSecondaryColorRGB +
    ", 0.2)",
}

const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)",
}
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
}
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
}
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
}
const dashboardBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)",
}

const warningCardHeader = {
  color: secondaryTextColor,
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow,
}
const successCardHeader = {
  color: secondaryTextColor,
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow,
}
const dangerCardHeader = {
  color: secondaryTextColor,
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow,
}
const infoCardHeader = {
  color: secondaryTextColor,
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow,
}
const primaryCardHeader = {
  color: secondaryTextColor,
  background:
    "linear-gradient(60deg, " +
    lightPrimaryColor +
    " , " +
    lightPrimaryGradient +
    ")",
  ...lightPrimaryBoxShadow,
}
const dashboardCardHeader = {
  color: secondaryTextColor,
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...dashboardBoxShadow,
}
const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont,
}

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px",
}

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
}

const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
}

const cardTitle = {
  ...title,
  marginTop: ".625rem",
}

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem",
  },
}

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem",
}

/** fonts variables and methods */
const remSize = 16
const getCalcRem = pixels => {
  return pixels / remSize + "rem"
}

const defaultMobileFontSize = getCalcRem(14) /**  sm down */
const defaultDesktopFontSize = getCalcRem(remSize) /** md up */

export {
  //variables
  drawerWidth,
  transition,
  container,
  containerFluid,
  appMinWidth,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  darkPrimaryColor,
  lightPrimaryColor,
  secondaryColor,
  secondaryColorRGB,
  darkSecondaryColor,
  darkSecondaryColorRGB,
  tertiaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  dashboardColor,
  grayColor,
  primaryBgColor,
  secondaryBgColor,
  tertiaryBgColor,
  rowBgColor,
  primaryTextColor,
  secondaryTextColor,
  primaryBoxShadow,
  secondaryBoxShadow,
  darkSecondaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  dashboardBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  dashboardCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  getCalcRem,
  defaultMobileFontSize,
  defaultDesktopFontSize,
}
