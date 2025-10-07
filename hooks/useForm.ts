'use client';
import {
  useForm as useReactHookForm,
  UseFormReturn,
  FieldValues,
  UseFormProps,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';

interface UseFormProps {
  form: {};
  api: {};
}
export const useForm = () => {
  const form = useReactHookForm({
    resolver: zodResolver(),
  });
};
