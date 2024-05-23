import { StyledCard } from "./Card.styles";

export type CardProps = React.InsHTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
