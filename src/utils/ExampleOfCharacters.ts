import Ahri from "../assets/ahri.png";
import Dva from "../assets/dva.png";
import Naruto from "../assets/naruto.png";
import Stormtrooper from "../assets/stormtrooper.png";
import Tracer from "../assets/tracer.png";

interface IExample {
  name: string;
  game: string;
  imageUrl: string;
}

export const ExampleOfCharacters: IExample[] = [
  {
    name: "Ahri",
    game: "League of Legends",
    imageUrl: Ahri,
  },
  {
    name: "Dva",
    game: "Overwatch",
    imageUrl: Dva,
  },
  {
    name: "Naruto",
    game: "Naruto",
    imageUrl: Naruto,
  },
  {
    name: "Stormtrooper",
    game: "Star Wars",
    imageUrl: Stormtrooper,
  },
  {
    name: "Tracer",
    game: "Overwatch",
    imageUrl: Tracer,
  },
];
