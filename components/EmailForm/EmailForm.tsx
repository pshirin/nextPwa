'use client';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { fakeApi } from '@/utils/common';
import { useMutation } from '@tanstack/react-query';
import { pages } from '@/config/paths';
import { useRouter } from 'next/navigation';
import { ResponseErrorAlert } from '../ResponseErrorAlert';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { vh } from '@/styles/utils';

const schema = zod.object({
  email: zod.email(),
});

interface EmailFormProps {
  footer?: React.ReactNode;
}
type SubmitValues = zod.infer<typeof schema>;

export const EmailForm = ({ footer }: EmailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({ resolver: zodResolver(schema), mode: 'onChange' });
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (email: string) => fakeApi(email),
    onSuccess: (_, email) => {
      router.replace(`${pages.auth.otp}/?email=${email}`);
    },
    onError: (error) => {
      setError('email', {
        type: 'server',
        message: error.message || 'Неожиданная ошибка',
      });
    },
  });
  const submitHandler = ({ email }: SubmitValues) => {
    mutation.mutate(email);
  };
  const validationMessage = errors.email?.message;
  const isInvalid = !!errors.email?.message;
  const isDisableSubmitButton = !isValid || isInvalid;
  return (
    <form className="s-gap-[16] flex flex-col" onSubmit={handleSubmit(submitHandler)}>
      <Input
        {...register('email')}
        isDisabled={mutation.isPending}
        label="Введите свою почту"
        variant="flat"
        color="default"
        autoComplete="email"
        errorMessage={validationMessage}
        className="!s-text-[14] s-leading-[20] s-py-[8]"
        classNames={{
          inputWrapper: '!s-max-h-[56] !s-h-[56] s-px-[12] !min-h-[10]',
          label: 's-text-[14] s-leading-[20]',
        }}
        isInvalid={isInvalid}
      />
      <ResponseErrorAlert message={mutation.error?.message} />
      <Button
        isLoading={mutation.isPending}
        isDisabled={isDisableSubmitButton}
        variant="solid"
        color="primary"
        className="s-text-[16] s-p-[12] s-leading-[24] s-rounded-[14] h-auto"
        fullWidth
        type="submit"
      >
        Отправить код
      </Button>
      {footer}
    </form>
  );
};
