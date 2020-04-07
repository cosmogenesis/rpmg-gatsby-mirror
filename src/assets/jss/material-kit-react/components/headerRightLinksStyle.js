import {
  defaultMobileFontSize,
  defaultDesktopFontSize,
} from "src/assets/jss/material-kit-react.js"
//import tooltip from "src/assets/jss/material-kit-react/tooltipsStyle.js";

import headerLinksStyle from "src/assets/jss/material-kit-react/components/headerLinksStyle.js"

const headerRightLinksStyle = theme => ({
  ...headerLinksStyle(theme),
  rightNavList: {
    "& li": {
      display: "block",
      width: "100%",
      "&.Mui-selected": {
        backgroundColor: "transparent",
        "&:hover,&:focus": {
          backgroundColor: "transparent",
        },
        "& .MuiButton-root": {
          backgroundColor: "rgba(0, 0, 0, 0.14)",
          cursor: "auto",
        },
      },
      "&:hover,&:focus": {
        backgroundColor: "transparent",
      },
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
      "& .MuiButton-root": {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: defaultMobileFontSize,
        letterSpacing: "0.05rem",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        width: "calc(100% - 30px)",
        display: "block",
        textAlign: "left",
        "&:hover,&:focus": {
          color: "inherit",
          background: "rgba(0, 0, 0, 0.08)",
        },
        "& > span:first-child": {
          justifyContent: "flex-start",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: defaultDesktopFontSize,
        },
      },
    },
  },
})

export default headerRightLinksStyle
