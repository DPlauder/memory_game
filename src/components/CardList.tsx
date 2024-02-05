import { useState, useEffect } from "react";
import { ICard } from "./ts/interfaces/global_interfaces";
import CardListContainer from "./CardList.container";
export default function CardList() {
  const [allCards, setAllCards] = useState<ICard[]>([]);
  const [playCards, setPlayCards] = useState<ICard[]>([]);
  const [cardNums, setCardNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const connect = async () => {
      try {
        const data = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10",
          options
        );
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        setAllCards((await data.json()) as ICard[]);
      } catch (error) {
        setErr(error as Error);
      }
    };
    connect();
  }, []);

  const options = {
    method: "GET",
    header: { "Content-Type": "application/json" },
  };

  return <CardListContainer cards={allCards} />;
}

//
