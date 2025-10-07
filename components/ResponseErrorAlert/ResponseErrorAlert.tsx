import { Alert } from '@heroui/alert';

interface ResponseErrorAlertProps {
  message?: string;
}

export const ResponseErrorAlert = ({ message }: ResponseErrorAlertProps) =>
  message && <Alert color={'danger'} title={message} />;
