"use client";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fakeApi } from "@/utils/common";
import { useMutation } from "@tanstack/react-query";
import { pages } from "@/config/paths";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

interface EmailFormProps {
  footer?: React.ReactNode;
}
interface SubmitValues {
  email: string;
}
export const EmailForm = ({ footer }: EmailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (email: string) => fakeApi(email),
    onSuccess: (_, email) => {
      router.replace(`${pages.auth.otp}/?email=${email}`);
    },
    onError: error => {
      setError("email", {
        type: "server",
        message: error.message || "Неожиданная ошибка",
      });
    },
  });

  const submitHandler = ({ email }: SubmitValues) => {
    mutation.mutate(email);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitHandler)}
    >
      <Input
        {...register("email")}
        isDisabled={mutation.isPending}
        label="Введите свою почту"
        variant="flat"
        color="default"
        autoComplete="email"
        size="sm"
        errorMessage={errors.email?.message}
        classNames={{
          input: "text-foreground",
          inputWrapper: "bg-content1",
        }}
        isInvalid={!!errors.email}
        radius="md"
      />
      <Button
        isLoading={mutation.isPending}
        isDisabled={!isValid}
        variant="solid"
        color="primary"
        size="lg"
        radius="lg"
        fullWidth
        type="submit"
      >
        Отправить код
      </Button>
      {footer}
    </form>
  );
};
