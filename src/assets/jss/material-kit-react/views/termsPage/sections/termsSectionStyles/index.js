import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"
import { getCalcRem } from "src/assets/jss/material-kit-react.js"

const termsSectionStyles = theme => ({
  ...defaultComponentStyles,
  termsPolicySection: {
    "& .MuiTypography-body1, & .MuiTypography-body1 p, & .MuiTypography-h5, & h3": {
      marginBottom: "1rem",
    },
    "& h3": {
      "& .MuiTypography-h5, ": {
        fontSize: "1.25rem",
        fontWeight: "500",
      },
    },
    "& .rpmg-list-wrapper, & ul": {
      width: "auto",
      display: "block",
      "& li": {
        marginLeft: "0",
        marginBottom: getCalcRem(16),
        display: "none",
      },
    },
  },
})

export default termsSectionStyles
