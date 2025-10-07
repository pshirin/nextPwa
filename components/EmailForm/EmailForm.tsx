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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
      <Input
        {...register('email')}
        isDisabled={mutation.isPending}
        label="Введите свою почту"
        variant="flat"
        color="default"
        autoComplete="email"
        size="sm"
        errorMessage={validationMessage}
        classNames={{
          input: 'text-foreground',
          inputWrapper: 'bg-content1',
        }}
        isInvalid={isInvalid}
        radius="md"
      />
      <ResponseErrorAlert message={mutation.error?.message} />
      <Button
        isLoading={mutation.isPending}
        isDisabled={isDisableSubmitButton}
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
