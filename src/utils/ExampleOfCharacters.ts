import Ahri from "../assets/ahri.png";
import Dva from "../assets/dva.png";
import Naruto from "../assets/naruto.png";
import Stormtrooper from "../assets/stormtrooper.png";
import Tracer from "../assets/tracer.png";

interface IExample {
  name: string;
  game: string;
  lore: string;
  imageUrl: string;
}

export const ExampleOfCharacters: IExample[] = [
  {
    name: "Ahri",
    game: "League of Legends",
    lore: "Inatamente conectada à magia do reino espiritual, Ahri é uma misteriosa raposa vastaya em busca de seu lugar no mundo. Ahri viajou por Ionia em busca de vastayas semelhantes a ela.",
    imageUrl: Ahri,
  },
  {
    name: "Dva",
    game: "Overwatch",
    lore: "O mecanismo de D.Va é ágil e poderoso - seus Canhões de Fusão gêmeos disparam com disparo automático a curto alcance, e ela pode usar seus Boosters para passar por cima de inimigos e obstáculos ou absorver ataques com sua Matriz de Defesa destruidora de projéteis.",
    imageUrl: Dva,
  },
  {
    name: "Naruto",
    game: "Naruto",
    lore: "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) é um shinobi de Konohagakure do clã Uzumaki e protagonista homônimo da franquia Naruto.",
    imageUrl: Naruto,
  },
  {
    name: "Stormtrooper",
    game: "Star Wars",
    lore: "Tormtroopers (STs) - também conhecidos como Stormtroopers Imperiais - eram as tropas de choque de elite do Império Galáctico e faziam parte do Corpo de Stormtrooper, um ramo militar independente operando sob o Exército Imperial.",
    imageUrl: Stormtrooper,
  },
  {
    name: "Tracer",
    game: "Overwatch",
    lore: "Carregando pistolas de pulso duplo, bombas-relógio baseadas em energia e brincadeiras de tiro rápido, Tracer é capaz de *piscar* através do espaço e retroceder sua linha do tempo pessoal enquanto luta para corrigir erros em todo o mundo.",
    imageUrl: Tracer,
  },
];
