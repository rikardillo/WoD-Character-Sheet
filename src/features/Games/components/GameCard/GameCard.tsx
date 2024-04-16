import { Game } from "@/features/Games";
import { StyledGameCard } from "./GameCard.styles";

export type GameCardProps = React.InsHTMLAttributes<HTMLDivElement> & {
  game: Game;
};

export const GameCard = ({ game, ...props }: GameCardProps) => {
  return (
    <StyledGameCard {...props}>
      {/* <div className="title">{game.title}</div> */}
      <img src={game.logoImageUrl} width="100%" />
    </StyledGameCard>
  );
};

export default GameCard;
