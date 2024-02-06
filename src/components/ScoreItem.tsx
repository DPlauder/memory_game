interface Props {
  highscore: number;
  score: number;
}

export default function Header({ highscore, score }: Props) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="scoreBox">
        <h2>Highscore</h2>
        <div>{highscore}</div>
        <h2>Score</h2>
        <div>{score}</div>
      </div>
    </div>
  );
}
