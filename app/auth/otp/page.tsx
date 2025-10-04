import { AuthFlowLayout } from "@/components";

import { redirect } from "next/navigation";
import { pages } from "@/config/paths";
import { InputOtp } from "@heroui/input-otp";
import { Button } from "@heroui/button";

interface OtpPageProps {
  params: Promise<never>;
  searchParams: Promise<{ email?: string }>;
}
export default async function Otp({ searchParams }: OtpPageProps) {
  const params = await searchParams;
  const email = params.email;

  if (!email) {
    return redirect(pages.auth.scenario);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 px-3">
      <AuthFlowLayout
        backButton={{ to: pages.auth.scenario }}
        title="Введите код"
        description={
          <span>
            На почту <span className="text-blue-600">{email}</span> отправлен
            код подтверждения
          </span>
        }
      >
        <div className="flex flex-col justify-between h-svh pb-4">
          <div className="flex items-center justify-center flex-col gap-4">
            <InputOtp length={5} />
            <p className="text-zinc-400">Отправить код повторно через 5:00</p>
            <p className="text-zinc-500">
              Не приходит код? проверьте в папке «спам»
            </p>
          </div>
          <Button
            variant="solid"
            color="primary"
            size="lg"
            radius="lg"
            fullWidth
            type="submit"
          >
            Войти
          </Button>
        </div>
      </AuthFlowLayout>
    </section>
  );
}
