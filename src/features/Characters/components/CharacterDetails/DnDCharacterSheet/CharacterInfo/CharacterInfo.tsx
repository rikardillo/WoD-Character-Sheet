import { style } from "../styles";
import HealthBar from "./HealthBar";

export const CharacterInfo = ({ data }) => {
  return (
    <div className="flex flex-col p-3 gap-3 bg-stone-400 grow">
      <div className="flex gap-3 h-1/2">
        <div className={`char--name grow ${style.infoBox}`}>{data.name}</div>
        <div className={`char--race p-3 ${style.infoBox}`}>{data.race}</div>
        <div className={`char--class p-3 ${style.infoBox}`}>{data.class}</div>
        <div className={`char--archetype p-3 ${style.infoBox}`}>
          {data.archetype}
        </div>
      </div>

      <div className="char--extra flex  h-1/2 gap-3">
        <div className={`char--extra-1 grow p-1 ${style.infoBox}`}>
          <div className={`profBonus flex flex-col grow ${style.infoBox}`}>
            <div className={style.title}>
              Proficiency Bonus
            </div>
            {data.proficiencyBonus}
          </div>
          <div className={`passivePerception flex flex-col grow ${style.infoBox}`}>
            <div className={style.title}>
              Passive Perception
            </div>
            {data.passivePerception}
          </div>
          <div className={`passiveInsight flex flex-col grow ${style.infoBox}`}>
          <div className={style.title}>
              Passive Insight
            </div>
            {data.passiveInsight}
          </div>
        </div>
        <div className={`char--extra-2 grow p-1 ${style.infoBox}`}>{}</div>
      </div>

      <div className={`healthContainer flex-col ${style.infoBox}`}>
        <div className={style.title}>Hit Points</div>
        <div className="hpBarContainer flex w-full p-4">
          <HealthBar />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
