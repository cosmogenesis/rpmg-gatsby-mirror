const parallaxStyle = theme => ({
  parallax: {
    [theme.breakpoints.down("lg")]: {
      height: "72vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "52vh",
      backgroundPosition: "center 26%",
    },
    "&.rpmg-desktop": {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      "&.rpmg-desktop": {
        display: "block",
      },
      "&.rpmg-mobile": {
        display: "none",
      },
    },
    "& .rpmg-img": {
      height: "90vh",
      maxHeight: "1000px",
      overflow: "hidden",
      position: "relative",
      backgroundPosition: "center 52%",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",

      [theme.breakpoints.down("lg")]: {
        height: "72vh",
      },
      [theme.breakpoints.down("md")]: {
        height: "52vh",
        backgroundPosition: "center 26%",
      },
    },
    filter: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    small: {
      height: "380px",
    },
  },
})

export default parallaxStyle
