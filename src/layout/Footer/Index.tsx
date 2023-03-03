import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography className={classes.title}>Nendoroid Colection</Typography>
    </Box>
  );
};
