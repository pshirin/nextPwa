"use client";
import { GoogleIconSvg } from "@/assets/icons/svg/GoogleIconSvg";
import { VkIconSvg } from "@/assets/icons/svg/VkIconSvg";
import { YandexIconSvg } from "@/assets/icons/svg/YandexIconSvg";
import { signIn, signOut } from "next-auth/react";
const socials = [
  {
    icon: <YandexIconSvg />,
    name: "yandex",
  },
  {
    icon: <VkIconSvg />,
    name: "vkontakte",
  },
  {
    icon: <GoogleIconSvg />,
    name: "google",
  },
];

export const SocialsAuth = () => {
  const clickHandler = (name: string) => () => {
    signIn(name, { callbackUrl: "/" });
  };

  return (
    <div className="mt-9 flex flex-col gap-6 text-center">
      <p className="text-zinc-500 text-medium">Или войти с помощью</p>
      <ul className="w-full flex gap-6 justify-center">
        {socials.map(social => (
          <li
            key={social.name}
            onClick={clickHandler(social.name)}
            className="cursor-pointer hover:contrast-125 hover:scale-110"
          >
            {social.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};
