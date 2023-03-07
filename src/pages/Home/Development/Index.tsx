import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export const Development = () => {
  const classes = useStyles();

  return (
    <Box className={classes.development}>
      <Box className={classes.developmentText}>
        <Typography className={classes.title}>Nendoroid Colection</Typography>
        <Typography className={classes.subTitle}>
          A série Nendoroid apresenta personagens fofos, figuras estilo chibi
          que cabem na palma da mão, para que eles possam estar sempre ao seu
          lado para apoiá-lo durante todo a agitação da vida cotidiana.
        </Typography>
      </Box>

      <Box>
        <Typography className={classes.opnions}>
          As Funko Pops are in the United States, Nendoroids are Japan’s
          ubiquitous figure brand that portrays hundreds of different characters
          from anime, games, and movies in a cutesy, minified form. Made from
          polyvinyl chloride (PVC), they're mass-produced in factories before
          getting shipped to fans all around the world.
        </Typography>
      </Box>
    </Box>
  );
};
