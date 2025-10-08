'use client';
import { GoogleIconSvg } from '@/assets/icons/svg/GoogleIconSvg';
import { VkIconSvg } from '@/assets/icons/svg/VkIconSvg';
import { YandexIconSvg } from '@/assets/icons/svg/YandexIconSvg';
import { signIn } from 'next-auth/react';

const iconClassNames = 's-w-[48] s-h-[48] s-min-w-[48] s-min-h-[48]';
const socials = [
  {
    icon: <YandexIconSvg className={iconClassNames} />,
    name: 'yandex',
  },
  {
    icon: <VkIconSvg className={iconClassNames} />,
    name: 'vkontakte',
  },
  {
    icon: <GoogleIconSvg className={iconClassNames} />,
    name: 'google',
  },
];

export const SocialsAuth = () => {
  const clickHandler = (name: string) => () => {
    signIn(name, { callbackUrl: '/' });
  };

  return (
    <div className="s-mt-[36] s-gap-[24] flex flex-col text-center">
      <p className="s-text-[16] s-leading-[24] text-zinc-500">Или войти с помощью</p>
      <ul className="s-gap-[24] flex w-full justify-center">
        {socials.map((social) => (
          <li
            key={social.name}
            onClick={clickHandler(social.name)}
            className="cursor-pointer hover:scale-110 hover:contrast-125"
          >
            {social.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};
