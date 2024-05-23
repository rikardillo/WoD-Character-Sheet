import StyledCardListContainer from "./CardListContainer.styles";
import Card from "../Card";
import PlusIcon from "@/common/components/Icons/PlusIcon";

export type CardListContainerProps = {
  children?: React.ReactNode;
  onCreateCard?: () => void;
  create?: boolean;
  createLabel?: string;
};

export const CardListContainer = ({
  children,
  create,
  createLabel = "Create",
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
          <h2>{createLabel}</h2>
        </Card>
      )}
      {children}
    </StyledCardListContainer>
  );
};

export default CardListContainer;
