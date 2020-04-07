import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme();

const cardBodyStyle = {
  cardBody: {
    padding: "1rem",
    flex: "1 1 auto",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 2rem"
    }
  }
};

export default cardBodyStyle;
