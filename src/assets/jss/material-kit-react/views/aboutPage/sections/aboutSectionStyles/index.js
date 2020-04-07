import {
  primaryTextColor,
  defaultMobileFontSize,
  defaultDesktopFontSize,
} from "src/assets/jss/material-kit-react.js"
import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"

const aboutSectionStyles = theme => ({
  ...defaultComponentStyles,
  aboutSection: {
    "& .rpmg-about-contact": {
      marginTop: "1rem",
      "& a": {
        color: primaryTextColor,
        fontSize: defaultMobileFontSize,
        textDecoration: "underline",
        [theme.breakpoints.up("sm")]: {
          fontSize: defaultDesktopFontSize,
        },
      },
    },
  },
})

export default aboutSectionStyles
