import { rowBgColor } from "src/assets/jss/material-kit-react.js"
import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"

const servicesListSectionStyles = theme => ({
  ...defaultComponentStyles,
  professionalsListSection: {
    "& .cardBody": {
      padding: "0",
    },
    "& .MuiTypography-h5": {
      fontSize: "1.25rem",
    },
    "& .professional-row": {
      padding: "1rem 2rem",
      "&:nth-child(even)": {
        backgroundColor: rowBgColor,
        "& .photo": {
          order: "1",
        },
        "& .name-bio": {
          paddingLeft: "0",
          paddingRight: "1rem",
        },
      },
      "& .name-bio-photo-row": {
        marginBottom: "1rem",
      },
      "& .photo": {
        maxWidth: "25%",
      },
      "&.with-photo": {
        "& .name-bio": {
          maxWidth: "75%",
          paddingLeft: "1rem",
        },
      },
    },
  },
})

export default servicesListSectionStyles
