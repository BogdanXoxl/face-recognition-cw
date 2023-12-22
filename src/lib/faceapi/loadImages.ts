import * as faceapi from "face-api.js";

export const loadImages = (images: IImage[]) => {
  const data = images.reduce<{ [key: string]: string[] }>((acc, cur) => {
    if (cur.title in acc) {
      acc[cur.title].push(cur.src);
    } else {
      acc[cur.title] = [cur.src];
    }
    return acc;
  }, {});

  return Promise.all(
    Object.keys(data).map(async (title) => {
      const descriptions: Float32Array[] = [];

      for (const src of data[title]) {
        const img = await faceapi.fetchImage(src);

        const detections = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();

        if (detections) {
          descriptions.push(detections?.descriptor);
        }
      }

      return new faceapi.LabeledFaceDescriptors(title, descriptions);
    })
  );
};
