import Link from 'next/link';
import { EmailForm } from '../EmailForm';

export const ByEmailAuthForm = () => {
  return (
    <div>
      <EmailForm
        footer={
          <p className="s-text-[12] row text-center text-zinc-600 outline-none">
            <span>Продолжая, вы соглашаетесь с</span>{' '}
            <Link href="#" className="s-text-[12] text-blue-600 underline outline-none">
              пользовательским соглашением
            </Link>{' '}
            <span> и даёте согласие на </span>{' '}
            <Link href="#" className="s-text-[12] text-blue-600 underline outline-none">
              обработку персональных данных
            </Link>
          </p>
        }
      />
    </div>
  );
};
