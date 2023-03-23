import { Development } from "./Development/Index";
import { Examples } from "./Examples/Index";
import { Introduction } from "./Introduction/Index";

export const Home = () => {
  return (
    <>
      <Introduction />

      <Development />

      <Examples />
    </>
  );
};
