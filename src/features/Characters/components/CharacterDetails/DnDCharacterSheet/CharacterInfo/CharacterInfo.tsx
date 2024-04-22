import { style } from "../styles";

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
          <div className={`profBonus flex flex-col ${style.infoBox}`}>
            <div className={style.title}>
              Proficiency <br />
              Bonus
            </div>
            {data.proficiencyBonus}
          </div>
          <div className={`passivePerception ${style.infoBox}`}>
            {data.passivePerception}
          </div>
          <div className={`passiveInsight ${style.infoBox}`}>
            {data.passiveInsight}
          </div>
        </div>
        <div className={`char--extra-2 grow p-1 ${style.infoBox}`}>{}</div>
      </div>

      <div className={`healthContainer flex-col ${style.infoBox}`}>
        <div className={style.title}>Hit Points</div>
        <div className="hpBarContainer flex">
          <div className={`hpCount`}>
            {data.hitPointsCurrent}/{data.hitPointsMax}
          </div>
          <div className={`healthBarBg  ${style.healthBarBg}`}>
            <div className={` ${style.healthBar}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
