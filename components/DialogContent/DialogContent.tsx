import { vh } from '@/styles/utils';
import Image from 'next/image';
import { ComponentProps } from 'react';

interface DialogContentProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: {
    import: ComponentProps<typeof Image>['src'];
    width: number;
    height: number;
  };
}
export const DialogContent = ({ title, description, icon }: DialogContentProps) => (
  <div className="flex flex-col items-center bg-white mb-0 s-pt-[36] s-pb-[36] s-gap-[36]">
    {icon && <Image width={icon.width} height={icon.height} src={icon.import} alt=" " priority />}
    <div className="flex flex-col items-center s-gap-[16]">
      <h4 className="font-extrabold text-center font-nunito s-text-[28] s-leading-[34]">{title}</h4>
      <p className="text-center text-zinc-600 s-text-[16] s-leading-[24]">{description}</p>
    </div>
  </div>
);
