import { Box, Button, Typography } from "@material-ui/core";
import { HiArrowNarrowRight } from "react-icons/hi";
import leviAckerman from "../../../assets/leviAckerman.png";
import { useStyles } from "./styles";

export const Introduction = () => {
  const classes = useStyles();

  return (
    <Box className={classes.home}>
      <Box className={classes.mainContentBox}>
        <Typography className={classes.title}>Os maravilhosos</Typography>
        <Typography className={classes.subTitle}>Nendoroids</Typography>

        <Box className={classes.infosBox}>
          <Typography className={classes.historyText}>
            Nendoroids são figuras fofas em estilo chibi com cerca de 10 cm de
            tamanho, baseadas em personagens de seus animes favoritos, jogos e
            muito mais! Placas faciais e partes do corpo podem ser trocadas,
            facilitando a criação de todos os tipos de poses e looks!
          </Typography>

          <Button
            endIcon={<HiArrowNarrowRight />}
            className={classes.helpButton}
          >
            Saber mais
          </Button>
        </Box>
      </Box>

      <Box className={classes.decorationFrame}>
        <img
          src={leviAckerman}
          alt="Exemplo de um nendoroid"
          className={classes.image}
        />
      </Box>
    </Box>
  );
};
