import { NextAuthOptions } from "next-auth";
import { providers } from "./providers";

export const authOptions: NextAuthOptions = {
  providers,
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt", // Стратегия сессии на основе JWT-токена
  },
};
