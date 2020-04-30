import {
  container,
  primaryTextColor,
  defaultMobileFontSize,
  defaultDesktopFontSize,
} from "src/assets/jss/material-kit-react.js"

const footerStyle = theme => ({
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: defaultMobileFontSize,
    //rpmgtextTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    [theme.breakpoints.down("xs")]: {
      padding: "0.9375rem .475rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: defaultDesktopFontSize,
    },
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0 2rem 0",
    float: "right!important",
    [theme.breakpoints.down("xs")]: {
      margin: "0 1rem 0",
    },
  },
  copy: {
    fontSize: ".75rem",
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& a": {
      color: primaryTextColor,
      textDecoration: "underline",
      backgroundColor: "transparent",
    },
    "& .rpmg-backtotop-button": {
      padding: "15px 0",
      margin: ".5rem 0 0",
      float: "right!important",
    },
  },

  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
  "& .rpmg-backtotop-button": {
    padding: "15px 0",
    margin: ".5rem 0 0",
    float: "right!important",
  },
})
export default footerStyle
