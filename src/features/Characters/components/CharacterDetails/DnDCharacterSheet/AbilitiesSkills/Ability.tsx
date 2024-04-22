import { style } from "../styles";

const proficient = (
  <div className="w-4 h-4 border-2 border-black rounded-full hover:bg-slate-600 cursor-pointer"></div>
);

export const Ability = ({ ability, ...props }) => {
  return (
    <>
      {ability.map((ability, i) => {
        return (
          <div key={`id-${ability.title}`}>
            <div className={`flex-col gap-3 ${style.infoBox}`}>
              <div key={`id-${ability.title}`} className="xl">
                {ability.title}
              </div>
              <div className="flex gap-3 justify-center items-center">
                <div className="ab-score text-xl font-bold flex items-center justify-center w-10 h-10 border-2 border-black rounded-full">
                  {ability.score}
                </div>
                <div>+ {ability.mod()}</div>
                {ability.skills.map((skill, i) => {
                  console.log(skill.val);
                  <div key={`id-${i}`}>
                    {/* <div>{skill.value}</div> */}
                    <div>{skill.title}</div>
                  </div>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>

    // <div className={`flex-col gap-3 ${style.infoBox}`}>
    //   <div className="xl">{ability.str.title}</div>
    //   <div className="flex gap-3 justify-center items-center">
    //     <div className="text-xl font-bold flex items-center justify-center w-10 h-10 border-2 border-black rounded-full ">
    //       {ability.str.score}
    //     </div>
    //     <div>+ {ability.str.mod}</div>
    //     <div className="flex flex-col gap-3 w-full">
    //       <div className="flex gap-3 items-center">
    //         {proficient}
    //         <div>+ {ability.str.savingThrow}</div>
    //         <div>Saving Throw</div>
    //       </div>
    //       {ability.str.skills.map((skill) => {
    //         return (
    //           <div className="flex gap-3 items-center hover:border-2">
    //             {proficient}
    //             <div>+ {skill.value}</div>
    //             <div>{skill.title}</div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Ability;
