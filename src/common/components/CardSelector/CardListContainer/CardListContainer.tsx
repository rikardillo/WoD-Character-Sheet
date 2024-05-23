import StyledCardListContainer from "./CardListContainer.styles";
import Card from "../Card";
import IconPlus from "src/assets/icons/plus.svg";
import PlusIcon from "../../Icons/Plus";

export type CardListContainerProps = {
  children?: React.ReactNode;
  onCreateCard?: () => void;
  create?: boolean;
};

export const CardListContainer = ({
  children,
  create,
  onCreateCard,
}: CardListContainerProps) => {
  return (
    <StyledCardListContainer>
      {!!create && (
        <Card
          onClick={onCreateCard}
          className="flex justify-center items-center text-white flex-col gap-4"
        >
          <PlusIcon />
          <h2>Create character</h2>
        </Card>
      )}
      {children}
    </StyledCardListContainer>
  );
};

export default CardListContainer;
