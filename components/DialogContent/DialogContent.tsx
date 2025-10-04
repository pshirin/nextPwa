import Image from "next/image";
import { ComponentProps } from "react";

interface DialogContentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: {
    import: ComponentProps<typeof Image>["src"];
    width: number;
    height: number;
  };
}
export const DialogContent = ({
  title,
  description,
  icon,
}: DialogContentProps) => (
  <div className="pt-9 px-4 pb-7 flex flex-col items-center gap-9 rounded-2xl bg-white mb-0">
    {icon && (
      <Image
        width={icon.width}
        height={icon.height}
        src={icon.import}
        alt=" "
        priority
      />
    )}
    <div className="flex flex-col items-center gap-4">
      <h4 className="font-extrabold text-[28px] text-center leading-8 font-nunito">
        {title}
      </h4>
      <p className="text-center text-base text-zinc-600 leading-6">
        {description}
      </p>
    </div>
  </div>
);
