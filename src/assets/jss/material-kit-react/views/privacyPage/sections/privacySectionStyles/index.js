import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles";
import { getCalcRem } from "src/assets/jss/material-kit-react.js";
import { Autorenew } from "@material-ui/icons";

const privacySectionStyles = theme => ({
  ...defaultComponentStyles,
  privacyPolicySection: {
    "& .MuiTypography-body1, & .MuiTypography-h5": {
      marginBottom: "1rem"
    },
    "& .rpmg-list-wrapper": {
      width: "auto",
      "& li": {
        marginLeft: "0",
        marginBottom: "0",
        flex: "none"
      }
    }
  }
});

export default privacySectionStyles;
