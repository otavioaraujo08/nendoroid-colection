import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#FFFFFF",
    minHeight: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    fontWeight: 550,
    color: "#000000",
  },
}));
