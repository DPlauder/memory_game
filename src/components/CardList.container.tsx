import { ICard, IPokemon } from "./ts/interfaces/global_interfaces";
import { useState, useEffect } from "react";
import CardList from "./CardList";

export default function CardListContainer() {
  const [allCards, setAllCards] = useState<ICard[]>([]);
  const [clickedCards, setClickedCards] = useState<ICard[]>([]);
  const [err, setErr] = useState<Error | null>(null);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    const connect = async () => {
      try {
        const data = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12",
          options
        );
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        const pokemons = await data.json();
        setAllCards(pokemons.results);
      } catch (error) {
        setErr(error as Error);
      }
    };
    connect();
  }, []);
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const handleClick = (pokemon: ICard) => {
    if (pokemon) {
      const isClicked = clickedCards.find((card) => card.name === pokemon.name);
      if (isClicked) {
        if (highscore < setClickedCards.length)
          setHighscore(setClickedCards.length);
        setClickedCards([]);
      } else {
        setClickedCards((prev) => [...prev, { ...pokemon }]);
      }
    }
    console.log(clickedCards);
    console.log(clickedCards.length);
  };
  return <CardList cards={allCards} clickHandler={handleClick} />;
}
