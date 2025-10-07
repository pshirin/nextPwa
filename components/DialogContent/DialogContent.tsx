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
  <div
    className="flex flex-col items-center bg-white mb-0"
    style={{
      paddingTop: vh(36),
      paddingBottom: vh(36),
      gap: vh(36),
      borderRadius: vh(16),
    }}
  >
    {icon && <Image width={icon.width} height={icon.height} src={icon.import} alt=" " priority />}
    <div className="flex flex-col items-center" style={{ gap: vh(16) }}>
      <h4
        style={{ fontSize: vh(28), lineHeight: vh(24) }}
        className="font-extrabold text-center font-nunito"
      >
        {title}
      </h4>
      <p className="text-center text-zinc-600" style={{ fontSize: vh(16) }}>
        {description}
      </p>
    </div>
  </div>
);
