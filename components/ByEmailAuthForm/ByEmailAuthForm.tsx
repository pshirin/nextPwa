import { Link } from "@heroui/link";
import NextLink from "next/link";
import { EmailForm } from "../EmailForm";

export const ByEmailAuthForm = () => {
  return (
    <div>
      <EmailForm
        footer={
          <p className="text-tiny text-zinc-600 mt-4">
            Продолжая, вы соглашаетесь с{" "}
            <Link as={NextLink} href="#" className="underline text-tiny">
              пользовательским соглашением
            </Link>{" "}
            и даёте согласие на{" "}
            <Link as={NextLink} href="#" className="underline text-tiny">
              обработку персональных данных
            </Link>
          </p>
        }
      />
    </div>
  );
};
