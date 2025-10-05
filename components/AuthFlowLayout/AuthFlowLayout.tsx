import { AltArrowLeft } from "@/assets/icons/svg/AltArrowLeft";
import Link from "next/link";
import { DialogContent } from "../DialogContent";

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
    <div className="max-h-svh h-full flex flex-col">
      {backButton && (
        <Link
          href={backButton.to}
          className="size-12 flex justify-center items-center rounded-full bg-default-100 min-h-12 min-w-12"
        >
          <AltArrowLeft />
        </Link>
      )}
      <DialogContent description={description} title={title} />
      {children}
    </div>
  );
};
