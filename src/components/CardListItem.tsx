interface Props {
  id: number;
  name: string;
  front_default: string;
}

export default function CardListItem({ id, name, front_default }: Props) {
  <div className="card">
    <h1>{name}</h1>
    <div>{front_default}</div>
    <div>{id}</div>
  </div>;
}
