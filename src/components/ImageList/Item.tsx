import { FC } from "react";

interface IProps {
  image: IImage;
}

export const Item: FC<IProps> = ({ image }) => {
  return (
    <div
      key={image.src}
      className="w-full rounded-lg flex items-center shrink-0 gap-4"
    >
      <img src={image.src} className="w-16 h-16 rounded-lg object-cover" />
      <span className="text-secondary-light">{image.title}</span>
    </div>
  );
};
