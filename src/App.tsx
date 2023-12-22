import { useEffect, useRef, useState } from "react";

import { ThemeProvider, ImageList, StreamVideo } from "@/components";
import { startVideo, loadModels, faceMyDetect } from "@/lib/faceapi";

function App() {
  const [images, setImages] = useState<IImage[]>([]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startVideo({ videoRef, canvasRef });
  }, []);

  useEffect(() => {
    loadModels().then(() => faceMyDetect({ videoRef, canvasRef, images }));
  }, [images]);

  const addImage = (img: IImage) => {
    if (images.find((i) => i.src === img.src)) {
      return;
    }

    setImages((imgs) => [img, ...imgs]);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full h-full flex flex-row p-4 gap-2">
        <ImageList images={images} addImage={addImage} />
        <StreamVideo videoRef={videoRef} canvasRef={canvasRef} />
      </div>
    </ThemeProvider>
  );
}

export default App;
