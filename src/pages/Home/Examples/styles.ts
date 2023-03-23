import { makeStyles } from "@material-ui/core";
import WallpaperAbstract from "../../../assets/wallpaperAbstract.jpg";

export const useStyles = makeStyles((theme) => ({
  wallpaperBox: {
    backgroundImage: `url(${WallpaperAbstract})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridBox: {
    display: "Grid",
    gridTemplatecolumns: "repeat(5, 1fr)",
    gridTemplaterows: "repeat(5, 1fr)",
    gridColumnGap: "0px",
    gridRowGap: "0px",
    height: "80%",
    width: "70%",
    backgroundColor: "rgb(255 255 255 / 70%)",
    position: "absolute",
  },
  boxName: {
    gridArea: "1 / 1 / 3 / 3",
    textAlign: "center",
    paddingTop: "2rem",
  },
  exampleName: {
    fontSize: "2rem",
    fontWeight: 600,
    color: "#fff",
    textShadow: "0 0 10px #000",
  },
  gameStats: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#fb8500",
    textShadow: "0 0 10px #fff",
    marginTop: "1rem",
  },
  boxStats: {
    gridArea: "3 / 1 / 6 / 3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  lore: {
    textAlign: "center",
    width: "80%",
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#fff",
    textShadow: "0 0 15px #000",
    marginBottom: "6rem",
  },
  buttonsBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  previousButton: {
    width: "50%",
    height: "100%",
    background: "linear-gradient(90deg, #fb8500 0%, #ffbd69 100%)",
    marginRight: "1rem",
  },
  nextButton: {
    width: "50%",
    height: "100%",
    background: "linear-gradient(90deg, #ffbd69 0%, #fb8500 100%)",
    marginLeft: "1rem",
  },
  boxImage: {
    gridArea: "1 / 3 / 6 / 6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "80%",
    width: "80%",
    objectFit: "contain",
  },
}));
