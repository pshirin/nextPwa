import { AltArrowLeft } from "@/assets/icons/svg/AltArrowLeft";

import { Button } from "@heroui/button";

import Link from "next/link";
import { DialogContent } from "../DialogContent";

interface AuthFlowLayoutProps {
  children: React.ReactNode;
  backButton?: {
    to: string;
  };
  title?: string;
  description?: string;
}
export const AuthFlowLayout = ({
  backButton,
  title,
  description,
  children,
}: AuthFlowLayoutProps) => {
  return (
    <div className="w-screen h-screen">
      {backButton && (
        <Button
          isIconOnly
          as={Link}
          href={backButton.to}
          color="default"
          size="lg"
          radius="full"
          variant="flat"
        >
          <AltArrowLeft />
        </Button>
      )}
      <DialogContent description={description} title={title} />
      {children}
    </div>
  );
};
