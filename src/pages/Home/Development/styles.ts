import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  development: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "5% 8%",
    backgroundColor: "#F0F0F0",
    [theme.breakpoints.between(0, 900)]: {
      flexDirection: "column",
    },
  },
  developmentTextBox: {
    [theme.breakpoints.between(0, 900)]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    fontFamily: "IBM Plex Serif, serif",
    fontSize: "1.8rem",
    fontWeight: 600,
    color: "#D2433B",
    [theme.breakpoints.between(0, 900)]: {
      fontSize: "1.5rem",
    },
  },
  subTitle: {
    width: "75%",
    fontFamily: "PT Serif, serif",
    fontSize: "1.3rem",
    fontWeight: 400,
    color: "#000000",
    [theme.breakpoints.between(0, 900)]: {
      fontSize: "1.2rem",
      width: "100%",
      textAlign: "center",
    },
  },
  opnionBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.between(0, 900)]: {
      marginTop: "1rem",
      textAlign: "center",
      width: "100%",
    },
  },
  opnions: {
    fontFamily: "Roboto",
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "#000000cf",
    display: "inline",
    "&::before": {
      content: "open-quote",
      color: "#D2433B",
      fontSize: "3rem",
      marginRight: "0.5rem",
      [theme.breakpoints.between(0, 900)]: {
        fontSize: "1.8rem",
      },
    },
    "&::after": {
      content: "close-quote",
      color: "#D2433B",
      fontSize: "2rem",
      marginLeft: "0.5rem",
      [theme.breakpoints.between(0, 900)]: {
        fontSize: "1.8rem",
      },
    },
    [theme.breakpoints.between(0, 900)]: {
      fontSize: "1.1rem",
    },
  },
  opnionAuthor: {
    marginTop: "1.5rem",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#000000cf",
    display: "inline",
  },
}));
