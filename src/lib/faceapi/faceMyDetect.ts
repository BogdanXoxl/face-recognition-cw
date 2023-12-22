import * as faceapi from "face-api.js";

import { loadImages } from "@/lib/faceapi";

interface IProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLDivElement>;
  images: IImage[];
}

export const faceMyDetect = async ({ images, canvasRef, videoRef }: IProps) => {
  if (!videoRef.current || !canvasRef.current || !images.length) {
    return;
  }

  const labeledImages = await loadImages(images);
  const faceMatcher = new faceapi.FaceMatcher(labeledImages, 0.6);

  const detectAndUpdate = async () => {
    if (!videoRef.current || !canvasRef.current || !images.length) {
      return;
    }

    const detections = await faceapi
      .detectAllFaces(videoRef.current)
      .withFaceLandmarks()
      .withFaceDescriptors();

    const canvas = faceapi.createCanvasFromMedia(videoRef.current);
    const ctx = canvas.getContext("2d");

    const containerWidth = canvasRef.current.clientWidth;
    const containerHeight = canvasRef.current.clientHeight;
    const videoAspectRatio =
      videoRef.current.videoWidth / videoRef.current.videoHeight;

    const displaySize = { width: 0, height: 0 };

    if (containerWidth / containerHeight > videoAspectRatio) {
      // Container is wider than the video
      displaySize.width = containerWidth;
      displaySize.height = containerWidth / videoAspectRatio;
    } else {
      // Container is taller than the video
      displaySize.width = containerHeight * videoAspectRatio;
      displaySize.height = containerHeight;
    }

    faceapi.matchDimensions(canvas, displaySize);

    // mirror video
    ctx?.save();
    ctx?.scale(-1, 1);
    ctx?.drawImage(
      videoRef.current,
      -displaySize.width,
      0,
      displaySize.width,
      displaySize.height
    );
    ctx?.restore();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    const results = resizedDetections.map((d) =>
      faceMatcher.findBestMatch(d.descriptor)
    );

    results.forEach((res, i) => {
      const box = resizedDetections[i].detection.box;
      // mirror box coordinates
      const reflectedX = displaySize.width - (box.x + box.width);
      const reflectedBox = {
        x: reflectedX,
        y: box.y,
        width: box.width,
        height: box.height,
      };

      const drawBox = new faceapi.draw.DrawBox(reflectedBox, {
        label: res.toString(),
      });

      drawBox.draw(canvas);
    });

    canvasRef.current.innerHTML = "";
    canvasRef.current.appendChild(canvas);

    requestAnimationFrame(detectAndUpdate);
  };

  detectAndUpdate();
};
