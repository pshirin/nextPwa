import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "title",
  description: "description",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="ru">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased"
          // fontSans.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <main className="w-full h-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
