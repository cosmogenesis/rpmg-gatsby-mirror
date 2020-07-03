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
    "& .MuiTypography-h5, ": {
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
    "& .MuiTypography-body1, & .MuiTypography-body1 p": {
      fontSize: getCalcRem(13),
      fontWeight: "400",
      lineHeight: "1.5",
      letterSpacing: "0.00938em",
      [theme.breakpoints.up("md")]: {
        fontSize: defaultDesktopFontSize,
      },
    },
    "& .MuiCollapse-container": {
      width: "100%",
      "& li": {
        marginLeft: "0 !important",
        [theme.breakpoints.up("md")]: {
          maxWidth: "45%",
          "&:nth-child(even)": {
            marginLeft: "5% !important",
          },
        },
      },
    },
    "& .rpmg-list-wrapper, & ul": {
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
        marginLeft: "-20px !important",
        marginBottom: ".25rem",
        maxWidth: "100%",
        width: "100%",
        flex: "none",
        fontSize: defaultMobileFontSize,
        [theme.breakpoints.up("md")]: {
          fontSize: defaultDesktopFontSize,
        },
      },
      "& li": {
        padding: "0",
        display: "list-item",
        fontWeight: "normal",
        flex: "1 0 50%",
        marginBottom: ".25rem",
        fontSize: defaultMobileFontSize,
        [theme.breakpoints.up("md")]: {
          fontSize: defaultDesktopFontSize,
          paddingRight: "1rem",
          maxWidth: "45%",
          "&:nth-child(odd)": {
            marginLeft: "5%",
          },
        },
        [theme.breakpoints.down("sm")]: {
          flex: "none",
          marginLeft: "1rem",
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
    "& .rpmg-learn-more-wrapper": {
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
      "& .expandClose": {
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
      "& .expandOpen": {
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
    },
  },
}

export default defaultComponentStyles
