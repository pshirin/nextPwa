'use client';
import { fakeApi } from '@/utils/common';
import { Button } from '@heroui/button';
import { InputOtp } from '@heroui/input-otp';
import { useMutation } from '@tanstack/react-query';
import * as zod from 'zod';
import { ResponseErrorAlert } from '../ResponseErrorAlert';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
interface OtpFormProps {
  email: string;
}
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
const OTP_LENGTH = 5;
const schema = zod.object({
  otp: zod.string().min(OTP_LENGTH),
});

type SubmitValues = zod.Infer<typeof schema>;

// const FIVE_MINUTES_IN_SECONDS = 5 * 60;
// const CodeInterval = () => {
//   const [timeLeft, setTimeLeft] = useState(FIVE_MINUTES_IN_SECONDS);
//   const [canResend, setCanResend] = useState(false);
//   useEffect(() => {
//     if (timeLeft <= 0) {
//       setCanResend(true);
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           setCanResend(true);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);
//   const handleResendCode = () => {
//     // Здесь логика повторной отправки кода
//     console.log('Resending code...');

//     // Сброс таймера
//     setTimeLeft(FIVE_MINUTES_IN_SECONDS);
//     setCanResend(false);
//   };
//   return (
//     <React.Fragment key="interval">
//       {!canResend ? (
//         <p className="text-zinc-400">Отправить код повторно через {formatTime(timeLeft)}</p>
//       ) : (
//         <Button
//           variant="light"
//           color="primary"
//           size="sm"
//           onPress={handleResendCode}
//           className="text-primary"
//         >
//           Отправить код повторно
//         </Button>
//       )}
//       <div>
//         <p className="text-center text-zinc-500">Не приходит код?</p>
//         <p className="text-center text-zinc-500">проверьте в папке «спам»</p>
//       </div>
//     </React.Fragment>
//   );
// };

export const OtpForm = ({ email }: OtpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SubmitValues>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
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
    <form className="s-pb-[16] flex h-full flex-col justify-between" onSubmit={submitHandler}>
      <div className="s-gap-[4] flex flex-col items-center justify-center">
        <InputOtp
          {...register('otp')}
          length={OTP_LENGTH}
          isInvalid={isInvalid}
          errorMessage={validationMessage}
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
        className="s-text-[16] s-p-[12] s-leading-[24] s-rounded-[14] h-auto"
      >
        Войти
      </Button>
    </form>
  );
};
