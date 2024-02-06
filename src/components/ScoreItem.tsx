interface Props {
  highscore: number;
  score: number;
}

export default function Header({ highscore, score }: Props) {
  return (
    <div className="header">
      <h3 className="ue1">Memory Game</h3>
      <article className="scoreBox">
        <h4>Highscore</h4>
        <div>{highscore}</div>
        <h4>Score</h4>
        <div>{score}</div>
      </article>
    </div>
  );
}
