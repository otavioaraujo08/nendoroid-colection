import { Box, Button, Typography } from "@material-ui/core";
import { useState } from "react";
import { ExampleOfCharacters } from "../../../utils/ExampleOfCharacters";
import { useStyles } from "./styles";

export const Examples = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastItemIndex = ExampleOfCharacters.length - 1;
  const classes = useStyles();

  const handleNextIndex = (isAcrescent: boolean) => {
    if (isAcrescent) {
      return setActiveIndex(activeIndex + 1);
    }

    setActiveIndex(activeIndex - 1);
  };

  return (
    <Box className={classes.wallpaperBox}>
      {ExampleOfCharacters.map((item, index) => {
        const isActive = index === activeIndex;

        return isActive ? (
          <Box className={classes.gridBox}>
            <Box className={classes.boxName}>
              <Typography className={classes.exampleName}>
                {item.name}
              </Typography>

              <Typography className={classes.gameStats}>{item.game}</Typography>
            </Box>

            <Box className={classes.boxStats}>
              <Box className={classes.buttonsBox}>
                <Button
                  disabled={index === 0}
                  onClick={() => handleNextIndex(false)}
                  className={classes.previousButton}
                >
                  Anterior
                </Button>

                <Button
                  disabled={index === lastItemIndex}
                  onClick={() => handleNextIndex(true)}
                  className={classes.nextButton}
                >
                  Próximo
                </Button>
              </Box>
            </Box>

            <Box className={classes.boxImage}>
              <img
                loading="lazy"
                src={item.imageUrl}
                alt={item.name}
                className={classes.image}
              />
            </Box>
          </Box>
        ) : null;
      })}
    </Box>
  );
};
