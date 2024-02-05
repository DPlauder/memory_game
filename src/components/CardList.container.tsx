import CardListItem from "./CardListItem";
import { ICard } from "./ts/interfaces/global_interfaces";

interface Props {
  cards: ICard[];
}

export default function ({ cards }: Props) {
  <div className="container">
    {"."}
    {cards.map((card): JSX.Element => {
      return (
        <CardListItem
          id={card.id}
          name={card.name}
          front_default={card.front_default}
        />
      );
    })}
  </div>;
}
