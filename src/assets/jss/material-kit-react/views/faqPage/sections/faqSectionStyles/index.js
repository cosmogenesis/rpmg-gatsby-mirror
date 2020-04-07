import {} from "src/assets/jss/material-kit-react.js"
import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"

const faqSectionStyles = theme => ({
  ...defaultComponentStyles,
  faqSection: {
    "& .rpmg-question-row": {
      marginBottom: "2rem",
    },
    "& .rpmg-question-wrapper": {
      // textDecoration: "underline",
      cursor: "pointer",
      "& .MuiSvgIcon-root": {
        float: "right",
      },
    },
    "& .rpmg-answer-wrapper": {
      marginTop: "1rem",
      paddingLeft: "1rem",
    },
  },
})

export default faqSectionStyles
