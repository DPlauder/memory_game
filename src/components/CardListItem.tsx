import { useEffect, useState } from "react";
import { ICard, IPokemon } from "./ts/interfaces/global_interfaces";

interface Props {
  url: string;
  card: ICard;
  handleClick: (name: ICard) => void;
}

export default function CardListItem({ url, handleClick, card }: Props) {
  const [pokemon, setPokemon] = useState<IPokemon>();
  useEffect(() => {
    const connect = async () => {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Sorry, we couldn't connect to our server!");
      }
      const pokemonCard = await data.json();
      setPokemon(pokemonCard);
    };
    connect();
  }, []);

  return (
    <article className="card" onClick={() => handleClick(card)}>
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.sprites.front_default} />
    </article>
  );
}
