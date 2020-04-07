import {
  primaryBgColor,
  secondaryBgColor,
  tertiaryBgColor,
  primaryTextColor,
  secondaryTextColor,
  cardTitle,
  defaultMobileFontSize,
  defaultDesktopFontSize,
  getCalcRem,
} from "src/assets/jss/material-kit-react.js"

const cardStyle = theme => ({
  card: {
    border: "0",
    marginBottom: "2rem",
    marginTop: "3.5rem",
    borderRadius: "6px",
    color: primaryTextColor,
    background: tertiaryBgColor,
    //width: "25rem",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: defaultDesktopFontSize,

    transition: "all 300ms linear",
    fontSize: defaultMobileFontSize,
    [theme.breakpoints.up("md")]: {
      fontSize: defaultDesktopFontSize,
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      "& .MuiTypography-subtitle1": {
        fontSize: getCalcRem(12),
      },
      "& .MuiTypography-subtitle2": {
        fontSize: getCalcRem(8),
        fontWeight: "normal",
        textTransform: "capitalize",
      },
    },
    "& .MuiCardActions-root": {
      padding: "0",
    },
    "& .MuiSvgIcon-root": {
      fill: primaryTextColor,
    },
    "& a": {
      color: secondaryTextColor,
      fontSize: getCalcRem(8),
    },
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden",
  },
  cardTitle: {
    ...cardTitle,
    color: secondaryTextColor,
  },
  buttonWrap: {
    display: "grid",
    margin: "0 auto",
    "& a": {
      margin: "0 auto",
      width: "30em",
      [theme.breakpoints.up("md")]: {
        width: "18rem",
      },
    },
    "& button": {
      width: "100%",
    },
  },
})

export default cardStyle
