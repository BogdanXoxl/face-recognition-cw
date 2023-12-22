import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FC, useState } from "react";
import { InputFile } from "./InputFile";

interface IProps {
  onAdd: (image: IImage) => void;
}

export const AddNew: FC<IProps> = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleClick = () => {
    if (title.trim().length && image) {
      onAdd({ title, src: image });
      setIsOpen(false);
      setTitle("");
      setImage("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        variant="ghost"
        className="w-full"
        onClick={() => setIsOpen(true)}
      >
        ADD+
      </Button>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>NEW IMAGE</DialogTitle>
        </DialogHeader>
        <InputFile
          image={image}
          error={error}
          onChange={(image) => setImage(image)}
        />
        <DialogFooter>
          <div className="w-full flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                className={error ? "border-destructive" : ""}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name"
              />
            </div>
            <Button onClick={handleClick}>+</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
