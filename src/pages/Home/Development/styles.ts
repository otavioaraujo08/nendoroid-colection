import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  development: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "0 8%",
    backgroundColor: "#F0F0F0",
  },
  developmentText: {
    marginTop: "2rem",
  },
  title: {
    fontFamily: "IBM Plex Serif, serif",
    fontSize: "1.8rem",
    fontWeight: 600,
    color: "#D2433B",
    [theme.breakpoints.between(0, 750)]: {
      fontSize: "1.5rem",
    },
  },
  subTitle: {
    width: "72%",
    fontFamily: "PT Serif, serif",
    fontSize: "1.3rem",
    fontWeight: 400,
    color: "#000000",
    [theme.breakpoints.between(0, 750)]: {
      fontSize: "1.3rem",
    },
  },
  opnions: {
    fontFamily: "Roboto",
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "#000000cf",
  },
}));
