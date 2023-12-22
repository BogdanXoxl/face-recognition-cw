import { GateImage } from "./GateImage";

export const Gate = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full flex flex-col gap-8 items-center">
        <GateImage className="w-1/3 text-gray-500" />
        <span className="text-gray-500">
          Access camera and load images to start
        </span>
      </div>
    </div>
  );
};
