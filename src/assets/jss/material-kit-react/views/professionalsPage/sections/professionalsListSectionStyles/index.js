import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"
import professionalStyles from "src/assets/jss/material-kit-react/components/professionalStyles"

const professionalsListSectionStyles = theme => ({
  ...defaultComponentStyles,
  ...professionalStyles,
  professionalsListSection: {
    "& .cardBody": {
      padding: "0",
    },
  },
})

export default professionalsListSectionStyles
