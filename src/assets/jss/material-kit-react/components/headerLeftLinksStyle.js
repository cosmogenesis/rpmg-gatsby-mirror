//import { defaultFont } from '/src/assets/jss/material-kit-react.js';
//import tooltip from '/src/assets/jss/material-kit-react/tooltipsStyle.js';
import headerLinksStyle from "src/assets/jss/material-kit-react/components/headerLinksStyle.js"
import {
  secondaryColorRGB,
  secondaryBoxShadow,
  getCalcRem,
  defaultMobileFontSize,
  defaultDesktopFontSize,
} from "src/assets/jss/material-kit-react.js"

const headerLeftLinksStyle = theme => ({
  ...headerLinksStyle(theme),
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    paddingTop: "0",
    paddingBottom: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "0 8px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: getCalcRem(13),
    letterSpacing: "0.05rem",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(" + secondaryColorRGB + ", 0.2)",
      ...secondaryBoxShadow,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.9375rem 4px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: defaultDesktopFontSize,
      padding: "0.9375rem 8px",
    },
  },
})

export default headerLeftLinksStyle
