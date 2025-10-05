"use client";
import { fakeApi } from "@/utils/common";
import { Button } from "@heroui/button";
import { InputOtp } from "@heroui/input-otp";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface OtpFormProps {
  email: string;
}

const OTP_LENGTH = 5;

const schema = yup.object().shape({
  otp: yup.string().min(OTP_LENGTH).required(),
});

type SubmitValues = yup.InferType<typeof schema>;

export const OtpForm = ({ email }: OtpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    setError,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (otp: string) => fakeApi(email, otp),
    onSuccess: (_, otp) => {
      console.log("success", otp);
    },
    onError: error => {
      setError("otp", {
        type: "server",
        message: error.message || "Неожиданная ошибка",
      });
    },
  });

  const submitHandler = handleSubmit(({ otp }) => {
    mutation.mutate(otp);
  });

  return (
    <form
      className="flex flex-col justify-between h-svh pb-4"
      onSubmit={submitHandler}
    >
      <div className="flex items-center justify-center flex-col gap-4">
        <InputOtp
          {...register("otp")}
          length={OTP_LENGTH}
          isInvalid={!!errors.otp?.message && isSubmitted}
          errorMessage={errors.otp?.message}
          className="max-w-min"
          classNames={{ errorMessage: "w-full" }}
        />

        <p className="text-zinc-400">Отправить код повторно через 5:00</p>
        <div>
          <p className="text-zinc-500 text-center">Не приходит код?</p>
          <p className="text-zinc-500 text-center">проверьте в папке «спам»</p>
        </div>
      </div>
      <Button
        variant="solid"
        color="primary"
        size="lg"
        radius="lg"
        isDisabled={!isValid}
        fullWidth
        type="submit"
      >
        Войти
      </Button>
    </form>
  );
};
