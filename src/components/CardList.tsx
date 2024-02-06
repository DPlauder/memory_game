//import React from "react";
import { ICard } from "./ts/interfaces/global_interfaces";
import CardListItem from "./CardListItem";

interface Props {
  cards: ICard[];
  clickHandler: (name: ICard) => void;
  err: Error | null;
}

export default function CardList({ cards, clickHandler, err }: Props) {
  if (err !== null) {
    return <div>{err?.message}</div>;
  } else {
    return cards.map((card) => {
      return (
        <div key={card.url}>
          <CardListItem url={card.url} handleClick={clickHandler} card={card} />
        </div>
      );
    });
  }
}
