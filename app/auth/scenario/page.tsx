import { AuthFlowLayout, ByEmailAuthForm, SocialsAuth } from '@/components';
import { pages } from '@/config/paths';

export default async function Scenario() {
  return (
    <section className="s-pl-[12] s-gap-[16] s-px-[12] flex flex-col items-center justify-center">
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
