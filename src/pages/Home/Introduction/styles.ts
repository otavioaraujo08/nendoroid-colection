import { makeStyles } from "@material-ui/core";
import decorativeFrame from "../../../assets/decorativeFrame.png";

export const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#F0F0F0",
    padding: "0 10%",
    [theme.breakpoints.between(0, 1060)]: {
      height: "auto",
      paddingTop: "3rem",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  title: {
    fontFamily: "PT Serif, serif",
    fontSize: "3.5rem",
    fontWeight: 400,
    color: "#000000",
    [theme.breakpoints.between(0, 750)]: {
      fontSize: "2.5rem",
    },
  },
  subTitle: {
    fontFamily: "IBM Plex Serif, serif",
    fontSize: "3.3rem",
    fontWeight: 600,
    color: "#D2433B",
    [theme.breakpoints.between(0, 750)]: {
      fontSize: "2.3rem",
    },
  },
  infosBox: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    maxWidth: "70%",
    marginTop: "1.5rem",
    marginLeft: "2rem",
    [theme.breakpoints.between(0, 1060)]: {
      textAlign: "center",
      alignItems: "center",
      maxWidth: "85%",
      marginBottom: "3rem",
    },
  },
  historyText: {
    fontFamily: "Roboto",
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "#000000cf",
  },
  helpButton: {
    marginTop: "1rem",
    maxWidth: "8.9rem",
    borderRadius: "0.5rem",
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#D2433B",
    textDecoration: "underline",
    [theme.breakpoints.between(0, 1060)]: {
      marginTop: "2rem",
      backgroundColor: "#D2433B",
      color: "#fff",
      textDecoration: "none",
    },
  },
  decorationFrame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${decorativeFrame})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    minWidth: "50%",
    minHeight: "70%",
    [theme.breakpoints.between(0, 1060)]: {
      maxWidth: "70%",
      maxHeight: "50%",
      marginBottom: "3rem",
    },
  },
  image: {
    marginLeft: "3rem",
    width: "75%",
    height: "100%",
    "&:hover": {
      rotate: "1turn",
      transition: ".6s linear",
    },
    [theme.breakpoints.between(0, 1060)]: {
      maxWidth: "60%",
      maxHeight: "50%",
    },
  },
}));
