import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import VKProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

const Google = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
});

const Vk = VKProvider({
  clientId: process.env.VK_CLIENT_ID!,
  clientSecret: process.env.VK_CLIENT_SECRET!,
});

const Yandex = YandexProvider({
  clientId: process.env.YANDEX_CLIENT_ID!,
  clientSecret: process.env.YANDEX_CLIENT_SECRET!,
});

const providers = [Google, Vk, Yandex];

export { providers };
