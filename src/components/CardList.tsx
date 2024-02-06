//import React from "react";
import { ICard } from "./ts/interfaces/global_interfaces";
import CardListItem from "./CardListItem";

interface Props {
  cards: ICard[];
  clickHandler: (name: ICard) => void;
}

export default function CardList({ cards, clickHandler }: Props) {
  return cards.map((card) => {
    return (
      <div key={card.url} className="card">
        <CardListItem url={card.url} handleClick={clickHandler} card={card} />
      </div>
    );
  });
}
