import { rowBgColor } from "src/assets/jss/material-kit-react.js"
import defaultComponentStyles from "src/assets/jss/material-kit-react/defaultComponentStyles"

const professionalStyles = {
  ...defaultComponentStyles,
  rpmgProfessional: {
    "&:nth-child(even)": {
      backgroundColor: rowBgColor,
    },
    "&:nth-child(odd)": {
      "& .photo": {
        order: "1",
      },
      "& .name-bio": {
        paddingLeft: "0",
        paddingRight: "1rem",
      },
    },
    "& .name-bio": {
      "& .MuiGrid-item": {
        width: "100%",
      },
      "& .rpmg-learn-more-wrapper": {
        marginLeft: "0",
        "& .MuiGrid-item": {
          width: "auto",
        },
      },
    },
    "&.in-list": {
      padding: "1rem 2rem",
    },
    "& .MuiTypography-h5": {
      fontSize: "1.25rem",
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
}

export default professionalStyles
