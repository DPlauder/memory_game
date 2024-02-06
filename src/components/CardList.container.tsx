import { ICard } from "./ts/interfaces/global_interfaces";
import { useState, useEffect } from "react";
import CardList from "./CardList";
import Header from "./ScoreItem";

export default function CardListContainer() {
  const [allCards, setAllCards] = useState<ICard[]>([]);
  const [clickedCards, setClickedCards] = useState<ICard[]>([]);
  const [err, setErr] = useState<Error | null>(null);
  const [score, setScore] = useState(0);
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
        if (highscore < score) {
          setHighscore(score);
        }
        setScore(0);
        setClickedCards([]);
      } else {
        setClickedCards((prev) => [...prev, { ...pokemon }]);
        setScore(score + 1);
      }
      shuffle();
    }
    console.log(clickedCards);
    console.log(clickedCards.length);
  };
  const shuffle = () => {
    const shuffledCards = [...allCards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }
    setAllCards(shuffledCards);
  };
  return (
    <div className="container">
      <Header highscore={highscore} score={score} />
      <div className="cardContainer">
        <CardList cards={allCards} clickHandler={handleClick} />
      </div>
    </div>
  );
}
