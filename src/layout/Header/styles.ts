import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: "5rem",
    backgroundColor: "#F0F0F0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 4rem",
    [theme.breakpoints.between(0, 800)]: {
      padding: "0 2rem",
    },
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontWeight: 540,
    color: "#0A0A09",
  },
  buttonIcon: {
    marginRight: "2rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#E0E0E0",
    },
    [theme.breakpoints.between(0, 800)]: {
      marginRight: 0,
    },
  },
}));
