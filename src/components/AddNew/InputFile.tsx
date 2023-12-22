import type { ChangeEvent, FC } from "react";
import { UploadImage } from "./UploadImage";

interface IProps {
  image: string;
  error?: boolean;
  onChange: (image: string) => void;
}

export const InputFile: FC<IProps> = ({ image, error = false, onChange }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const image = URL.createObjectURL(e.target.files[0]);
      onChange(image);
    }
  };

  return (
    <div className="w-full h-full max-w-2xl mx-auto">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className={`relative flex p-1 overflow-hidden flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-secondary ${
            error ? "border-destructive" : "border-primary"
          }`}
        >
          <div className="relative w-full h-full">
            <div className="w-full h-full">
              {image && (
                <img
                  src={image}
                  className="object-cover w-full h-full rounded-lg"
                />
              )}
            </div>
            <div className="w-full h-full flex gap-2 flex-col items-center justify-center pt-6 pb-5 absolute top-0 bg-secondary/75">
              <UploadImage />
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or Drag &
                Drop
              </p>
              <p className="text-xs text-gray-500">PNG</p>
            </div>
          </div>
          <input
            id="dropzone-file"
            type="file"
            onChange={handleFileChange}
            accept=".png"
            className="opacity-0 w-full h-full absolute top-0 left-0"
          />
        </label>
      </div>
    </div>
  );
};
