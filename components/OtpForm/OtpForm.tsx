'use client';
import { fakeApi } from '@/utils/common';
import { Alert } from '@heroui/alert';
import { Button } from '@heroui/button';
import { InputOtp } from '@heroui/input-otp';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
// import * as zod from 'zod';
import { ResponseErrorAlert } from '../ResponseErrorAlert';
import React, { useCallback, useEffect, useState } from 'react';

interface OtpFormProps {
  email: string;
}
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
const OTP_LENGTH = 5;

// const schema = zod.object().shape({
//   otp: zod.string().min(OTP_LENGTH).required(),
// });

// type SubmitValues = zod.InferType<typeof schema>;

const FIVE_MINUTES_IN_SECONDS = 5 * 60;
const CodeInterval = () => {
  const [timeLeft, setTimeLeft] = useState(FIVE_MINUTES_IN_SECONDS);
  const [canResend, setCanResend] = useState(false);
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setCanResend(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  const handleResendCode = () => {
    // Здесь логика повторной отправки кода
    console.log('Resending code...');

    // Сброс таймера
    setTimeLeft(FIVE_MINUTES_IN_SECONDS);
    setCanResend(false);
  };
  return (
    <React.Fragment key="interval">
      {!canResend ? (
        <p className="text-zinc-400">Отправить код повторно через {formatTime(timeLeft)}</p>
      ) : (
        <Button
          variant="light"
          color="primary"
          size="sm"
          onPress={handleResendCode}
          className="text-primary"
        >
          Отправить код повторно
        </Button>
      )}
      <div>
        <p className="text-zinc-500 text-center">Не приходит код?</p>
        <p className="text-zinc-500 text-center">проверьте в папке «спам»</p>
      </div>
    </React.Fragment>
  );
};

export const OtpForm = ({ email }: OtpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SubmitValues>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (otp: string) => fakeApi(email, otp),
    onSuccess: (_, otp) => {
      console.log('success', otp);
    },
  });

  const submitHandler = handleSubmit(({ otp }) => {
    mutation.mutate(otp);
  });

  const validationMessage = errors.otp?.message;
  const isInvalid = !!errors.otp?.message;
  const isDisableSubmitButton = !isValid || isInvalid;
  return (
    <form className="flex flex-col justify-between h-svh pb-4" onSubmit={submitHandler}>
      <div className="flex items-center justify-center flex-col gap-4">
        <InputOtp
          {...register('otp')}
          length={OTP_LENGTH}
          isInvalid={isInvalid}
          errorMessage={validationMessage}
          className="max-w-min"
          classNames={{ errorMessage: 'w-full' }}
        />
        <ResponseErrorAlert message={mutation.error?.message} />
      </div>{' '}
      <Button
        variant="solid"
        color="primary"
        size="lg"
        radius="lg"
        isDisabled={isDisableSubmitButton}
        fullWidth
        type="submit"
      >
        Войти
      </Button>
    </form>
  );
};
