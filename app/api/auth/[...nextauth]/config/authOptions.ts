import { NextAuthOptions } from "next-auth";
import { providers } from "./providers";
import { pages } from "@/config/paths";

export const authOptions: NextAuthOptions = {
  providers,
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: pages.auth.scenario,
  },
};
