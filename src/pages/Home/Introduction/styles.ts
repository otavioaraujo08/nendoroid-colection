import { makeStyles } from "@material-ui/core";
import decorativeFrame from "../../../assets/decorativeFrame.png";

export const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "90vh",
    backgroundColor: "#F0F0F0",
    padding: "0 10%",
  },
  mainContentBox: {
    alignItems: "left",
  },
  title: {
    fontFamily: "PT Serif, serif",
    fontSize: "3.5rem",
    fontWeight: 400,
    color: "#000000",
  },
  subTitle: {
    fontFamily: "IBM Plex Serif, serif",
    fontSize: "3.3rem",
    fontWeight: 600,
    color: "#D2433B",
  },
  infosBox: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    maxWidth: "70%",
    marginTop: "1.5rem",
    marginLeft: "2rem",
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
  },
  decorationFrame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${decorativeFrame})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    minWidth: "30rem",
    minHeight: "90rem",
  },
  image: {
    marginLeft: "3rem",
    width: "70%",
    height: "70%",
  },
}));
