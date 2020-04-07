import {
  container,
  title,
  primaryBgColor,
  secondaryBgColor,
  primaryTextColor,
  secondaryTextColor,
  appMinWidth,
  defaultDesktopFontSize,
  defaultMobileFontSize,
} from "src/assets/jss/material-kit-react.js"

import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme()

const defaultPageStyles = {
  body: {
    backgroundColor: primaryBgColor,
    color: primaryTextColor,
    height: "100%",
    ...appMinWidth,
    "& .MuiTypography-gutterBottom": {
      marginBottom: ".5rem",
      [theme.breakpoints.up("md")]: {
        marginBottom: "1rem",
      },
    },
    "& .rpmg-content-container": {
      "& a": {
        color: primaryTextColor,
        fontSize: defaultMobileFontSize,
        textDecoration: "underline",
        [theme.breakpoints.up("md")]: {
          fontSize: defaultDesktopFontSize,
        },
      },
    },
  },
  container: {
    zIndex: "12",
    color: secondaryTextColor,
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: secondaryBgColor,
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-10rem 2rem 1rem",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("md")]: {
      margin: "-4rem 2rem 1rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "-5rem .5rem 1rem",
    },
  },
  grid: {
    display: "block",
    justifyContent: "center",
    margin: "0",
    padding: "0 24px !important",
  },
  ".rpmg-content-container": {},
}

export default defaultPageStyles
