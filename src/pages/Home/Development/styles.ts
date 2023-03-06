import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  development: {
    textAlign: "center",
    color: "gold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));
