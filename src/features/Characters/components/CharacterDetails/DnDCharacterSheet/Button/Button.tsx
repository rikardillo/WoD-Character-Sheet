import { text } from "stream/consumers";

export const Button = ({ text }) => {
  return (
    <button className="w-[20rem] flex justify-center bg-stone-400 rounded-md p-3 hover:bg-stone-300">
      <p>{text}</p>
    </button>
  );
};
