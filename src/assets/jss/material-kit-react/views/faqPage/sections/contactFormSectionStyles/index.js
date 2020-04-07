import { primaryTextColor } from "src/assets/jss/material-kit-react.js"
import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"

const contactFormSectionStyles = theme => ({
  ...defaultComponentStyles,
  contactFormSection: {
    "& .rpmg-field-set": {
      marginBottom: theme.spacing(4),
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#000",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid " + primaryTextColor,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryTextColor,
      borderWidth: "2px",
    },
  },
})

export default contactFormSectionStyles
