import { FC } from "react";

import { AddNew } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Item } from "./Item";
import { Gate } from "./Gate";

interface IProps {
  images: IImage[];
  addImage: (image: IImage) => void;
}

export const ImageList: FC<IProps> = ({ images, addImage }) => {
  return (
    <div className="w-1/3 min-w-[350px] h-full bg-secondary p-4 flex flex-col items-center justify-between gap-4 bg-primary-dark rounded-lg">
      {images.length === 0 ? (
        <Gate />
      ) : (
        <ScrollArea className="h-full w-full">
          <div className="flex flex-col gap-4">
            {images.map((image) => (
              <Item key={image.src} image={image} />
            ))}
          </div>
        </ScrollArea>
      )}

      <AddNew onAdd={addImage} />
    </div>
  );
};
