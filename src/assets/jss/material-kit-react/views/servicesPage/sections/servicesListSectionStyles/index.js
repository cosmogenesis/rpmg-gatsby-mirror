import { rowBgColor } from "src/assets/jss/material-kit-react.js"
import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"

const servicesListSectionStyles = theme => ({
  ...defaultComponentStyles,
  servicesListSection: {
    "& .cardBody": {
      padding: "0",
      "& .rpmg-list-wrapper li": {
        "&:nth-child(odd)": {
          paddingRight: "1rem",
        },
      },
    },
  },

  servicesRow: {
    padding: "1rem 2rem",
    "&:nth-child(even)": {
      backgroundColor: rowBgColor,
    },
  },
})

export default servicesListSectionStyles
