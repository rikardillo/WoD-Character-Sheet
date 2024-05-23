import { Spinner } from "flowbite-react";

export const Loading = () => {
  return (
    <div
      id="loading"
      className="text-white p-4 bg-black/70 rounded-[8px] absolute right-2 bottom-2 z-40"
    >
      <Spinner className="fill-black/20" />
    </div>
  );
};

export default Loading;
