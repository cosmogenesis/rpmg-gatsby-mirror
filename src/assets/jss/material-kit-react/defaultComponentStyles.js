import imagesStyles from "src/assets/jss/material-kit-react/imagesStyles.js"
import {
  primaryTextColor,
  defaultMobileFontSize,
  defaultDesktopFontSize,
  getCalcRem,
} from "src/assets/jss/material-kit-react"

import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme()

const defaultComponentStyles = {
  ...imagesStyles,
  cardBody: {
    "& .MuiTypography-h4": {
      fontSize: getCalcRem(24),
      fontWeight: "500",
    },
    "& .MuiTypography-h5": {
      fontSize: "1.25rem",
      fontWeight: "500",
    },
    "& .MuiCardActions-root": {
      marginTop: getCalcRem(16),
    },
    "& .MuiCardActions-root .MuiButton-label": {
      letterSpacing: "0.00735rem",
      fontSize: "1.175em",
      textTransform: "Capitalize",
      [theme.breakpoints.up("md")]: {
        fontSize: defaultDesktopFontSize,
      },
    },
    "& .MuiTypography-body1": {
      fontSize: getCalcRem(13),
      [theme.breakpoints.up("md")]: {
        fontSize: defaultDesktopFontSize,
      },
    },
    "& .rpmg-list-wrapper": {
      width: "100%",
      listStyle: "disc",
      paddingLeft: "20px",
      display: "flex",
      flexWrap: "wrap",
      "& .MuiListSubheader-root": {
        fontWeight: "500",
        lineHeight: "inherit",
        textTransform: "capitalize",
        color: primaryTextColor,
        marginLeft: "-20px",
        marginBottom: ".25rem",
        width: "100%",
        flex: "none",
        [theme.breakpoints.down("md")]: {
          fontSize: defaultMobileFontSize,
        },
      },
      "& li": {
        padding: "0",
        display: "list-item",
        fontWeight: "normal",
        flex: "1 0 50%",
        marginBottom: ".25rem",
        [theme.breakpoints.down("md")]: {
          fontSize: defaultMobileFontSize,
        },
        [theme.breakpoints.down("sm")]: {
          flex: "none",
          marginLeft: "1rem",
        },

        "&:nth-child(even)": {
          paddingRight: "1rem",
        },
        "& .MuiListItemText-root": {
          margin: "0 0 0 -5px",
        },
        "& .MuiListItemText-primary": {
          whiteSpace: "nowrap",
          fontSize: ".5rem",
        },
      },
    },
  },
  learnMoreLinkWrap: {
    marginLeft: "15px",
    width: "100%",
    "& button": {
      background: "transparent",
      border: "0",
      fontSize: defaultMobileFontSize,
      padding: "0",
      color: primaryTextColor,
    },
    "& .linkText": {
      width: "2.5rem",
    },
  },
  expand: {
    "& .expandedText": {
      display: "none",
    },
    "& .linkText": {
      lineHeight: "26px",
    },
    "& svg": {
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
  },
  expandOpen: {
    "& .collapsedText": {
      display: "none",
    },
    "& .expandedText": {
      display: "inline",
    },
    "& .linkText": {
      lineHeight: "22px",
    },
    "& svg": {
      transform: "rotate(180deg)",
    },
  },
}

export default defaultComponentStyles
