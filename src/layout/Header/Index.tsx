import { Box, Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { FaGithubAlt } from "react-icons/fa";

export const Header = () => {
  const classes = useStyles();

  const redirectToGithub = () => {
    window.open(
      "https://github.com/otavioaraujo08/nendoroid-colection",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <Box className={classes.header}>
      <Typography className={classes.title}>Nendoroid Colection</Typography>

      <Button onClick={redirectToGithub} className={classes.buttonIcon}>
        <FaGithubAlt size="2rem" />
      </Button>
    </Box>
  );
};
