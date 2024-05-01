import Attack from "./Attack";
import { Button } from "../Button/Button";

export const Attacks = () => {
  const atkSubTitle = "grow text-xs text-center";

  return (
    <div className="flex flex-col items-center gap-3 w-full bg-stone-100 p-4 rounded-md">
      <h2 className="text-lg">Attacks</h2>
      <div className="atk-titles w-full flex grow gap-4 uppercase ">
        <div className={`${atkSubTitle}`}>Name</div>
        <div className={`${atkSubTitle}`}>Range - Ft.</div>
        <div className={`${atkSubTitle}`}>Atk Bonus</div>
        <div className={`${atkSubTitle}`}>Damage / Type</div>
        <div className={`${atkSubTitle}`}>Notes</div>
      </div>
      <hr />
      <Attack />
      <Button text="Add Attack" />
    </div>
  );
};

export default Attacks;
