import defaultPageStyles from "src/assets/jss/material-kit-react/defaultPageStyles"

const homePageStyles = theme => ({
  ...defaultPageStyles,
  body: {
    "& .rpmg-promoted-description": {
      [theme.breakpoints.up("sm")]: {
        minHeight: "90px",
      },
    },
  },
})

export default homePageStyles
