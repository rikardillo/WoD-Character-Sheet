import Attacks from "./Attacks";
import ClassActions from "./ClassActions";
import { style } from "../styles";

export const ActionsSection = () => {
  return (
    <div
      className={`actions grow ${style.infoBox}`}
    >
      <div className={`actions--container flex flex-col justify-items-start grow p-4 h-full`}>
        <h2>Actions Section</h2>
        <Attacks />
        {/* <ClassActions /> */}
      </div>
    </div>
  );
};

export default ActionsSection;
