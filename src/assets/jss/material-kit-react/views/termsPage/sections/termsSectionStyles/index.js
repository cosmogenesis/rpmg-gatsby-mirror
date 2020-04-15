import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"
import { getCalcRem } from "src/assets/jss/material-kit-react.js"

const termsSectionStyles = theme => ({
  ...defaultComponentStyles,
  termsPolicySection: {
    "& .MuiTypography-body1, & .MuiTypography-h5, & .MuiTypography-body1 p": {
      marginBottom: "1rem",
    },
    "& .rpmg-list-wrapper": {
      marginLeft: getCalcRem(16),
      "& li": {
        flex: "none",
      },
    },
  },
})

export default termsSectionStyles
