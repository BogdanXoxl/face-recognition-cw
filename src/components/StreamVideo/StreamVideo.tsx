import { type FC } from "react";
import { Gate } from "./Gate";

interface IProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLDivElement>;
}

export const StreamVideo: FC<IProps> = ({ videoRef, canvasRef }) => {
  return (
    <div className="w-full h-full relative bg-secondary rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        crossOrigin="anonymous"
        className="w-0 h-0 invisible"
        autoPlay
        muted
      />
      <Gate />
      <div
        ref={canvasRef}
        className="absolute top-0 w-full h-full overflow-hidden"
      ></div>
    </div>
  );
};
