import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';
import { inter, nunito } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'title',
  description: 'description',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head />
      <body
        className={clsx(
          'min-h-svh h-full text-foreground bg-background antialiased',
          nunito.variable,
          inter.variable,
          inter.className,
        )}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
