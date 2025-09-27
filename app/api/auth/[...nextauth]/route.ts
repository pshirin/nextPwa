import NextAuth from "next-auth";
import { authOptions } from "./config/authOptions";

const handler = NextAuth(authOptions);

const GET = handler;
const POST = handler;

export { GET, POST };
