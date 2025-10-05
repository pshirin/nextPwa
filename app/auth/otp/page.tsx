import { AuthFlowLayout, OtpForm } from "@/components";

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
        <OtpForm email={email} />
      </AuthFlowLayout>
    </section>
  );
}
