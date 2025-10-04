import { AuthFlowLayout, ByEmailAuthForm, SocialsAuth } from "@/components";
import { pages } from "@/config/paths";

export default async function Scenario() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-3">
      <AuthFlowLayout
        backButton={{ to: pages.welcome }}
        title="Введите вашу электронную почту"
        description="Мы отправим на неё код для входа."
      >
        <ByEmailAuthForm />
        <SocialsAuth />
      </AuthFlowLayout>
    </section>
  );
}
