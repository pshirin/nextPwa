import { AltArrowLeft } from '@/assets/icons/svg/AltArrowLeft';
import Link from 'next/link';
import { DialogContent } from '../DialogContent';

interface AuthFlowLayoutProps {
  children: React.ReactNode;
  backButton?: {
    to: string;
  };
  title?: React.ReactNode;
  description?: React.ReactNode;
}
export const AuthFlowLayout = ({
  backButton,
  title,
  description,
  children,
}: AuthFlowLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col">
      {backButton && (
        <Link
          href={backButton.to}
          className="bg-default-100 s-w-[48] s-h-[48] s-min-h-[48] s-min-w-[48] flex items-center justify-center rounded-full"
        >
          <AltArrowLeft className="s-w-[24] s-h-[24]" />
        </Link>
      )}
      <DialogContent description={description} title={title} />
      {children}
    </div>
  );
};
