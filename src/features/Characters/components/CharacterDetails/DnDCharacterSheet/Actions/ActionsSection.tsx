import Attacks from "./Attacks";
import ClassActions from "./ClassActions";
import { style } from "../styles";

export const ActionsSection = () => {
  return (
    <div className={style.infoBox}>
      Actions Section
      <Attacks />
      <ClassActions />
    </div>
  );
};

export default ActionsSection;
