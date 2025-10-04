import { AuthFlowLayout } from "@/components";
import { pages } from "@/config/paths";
import { Input } from "@heroui/input";

const ByEmailAuthForm = () => {
  return (
    <form>
      <Input
        label="Введите свою почту"
        variant="flat"
        color="default"
        size="sm"
        radius="md"
      />
      ss
    </form>
  );
};
export default async function Scenario() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <AuthFlowLayout
        backButton={{ to: pages.welcome }}
        title="Введите вашу электронную почту"
        description="Мы отправим на неё код для входа."
      >
        <ByEmailAuthForm />
      </AuthFlowLayout>
    </section>
  );
}
