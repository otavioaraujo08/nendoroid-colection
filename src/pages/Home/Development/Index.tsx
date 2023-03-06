import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export const Development = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.development}>
        This will be the development
      </Typography>
    </Box>
  );
};
