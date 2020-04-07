import {
  primaryTextColor,
  defaultMobileFontSize,
  defaultDesktopFontSize
} from "src/assets/jss/material-kit-react.js";
import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles";

const resourcesSectionStyles = theme => ({
  ...defaultComponentStyles,
  resourcesSection: {
    "& .rpmg-field-set": {
      marginBottom: theme.spacing(4)
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#000"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid " + primaryTextColor
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryTextColor,
      borderWidth: "2px"
    },
    "& .rpmg-resource-listing": {
      marginTop: "1rem",
      "& a": {
        color: primaryTextColor,
        fontSize: defaultMobileFontSize,
        textDecoration: "underline",
        [theme.breakpoints.up("sm")]: {
          fontSize: defaultDesktopFontSize
        }
      },
      "& ul": {
        padding: "0"
      },
      "& li": {
        marginBottom: theme.spacing(2)
      },
      "& .rpmg-resource-name": {
        marginRight: "auto"
      }
    }
  }
});

export default resourcesSectionStyles;
