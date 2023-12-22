interface IProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLDivElement>;
}

export const startVideo = async ({ videoRef, canvasRef }: IProps) => {
  try {
    const currentStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    if (!videoRef.current || !canvasRef.current) {
      return;
    }

    videoRef.current.srcObject = currentStream;
  } catch (e) {
    console.log(e);
  }
};
