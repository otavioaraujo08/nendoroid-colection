import { Box } from "@material-ui/core";
import { Development } from "./Development/Index";
import { Introduction } from "./Introduction/Index";

export const Home = () => {
  return (
    <Box>
      <Introduction />

      <Development />
    </Box>
  );
};
