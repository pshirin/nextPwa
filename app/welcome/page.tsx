import { DialogContent, WithWelcomePatternBackground } from '@/components';
import Image from 'next/image';
import React from 'react';
import phoneImage from '@/public/png/welcomePhone.png';
import welcomePanda from '@/public/png/welcomePanda.png';
import { Button } from '@heroui/button';
import Link from 'next/link';
import { pages } from '@/config/paths';
import { vh } from '@/styles/utils';

export default async function Signin() {
  return (
    <WithWelcomePatternBackground>
      {/* Первая секция (фон и телефон) */}
      <section className="relative grid grid-cols-1 overflow-x-clip s-pt-[24] h-full">
        <div className="relative pointer-events-none select-none mx-auto s-w-[220] s-h-[429]">
          <Image
            src={phoneImage}
            alt="Телефон"
            fill
            style={{
              clipPath: `inset(${vh(4)} ${vh(7)} round ${vh(42)})`,
            }}
            priority
            placeholder="blur"
          />

          {/* Панда на экране телефона */}
          <div className="absolute pointer-events-none select-none s-left-[128] s-top-[149]">
            <div className="relative s-w-[202] s-h-[328]">
              <Image src={welcomePanda} alt="Панда" fill priority placeholder="empty" />
            </div>
          </div>
        </div>

        {/* Контентная часть */}
        <div
          style={{
            boxShadow: '0 -4px 12px rgba(0,0,0,0.1)', // смещение вверх
          }}
          className="bg-white w-full shadow-md rounded-b-none s-pb-[27] s-rounded-[16] s-px-[16] max-h-min flex flex-col"
        >
          <DialogContent
            title="Добро пожаловать в «пока нет названия»!"
            description="Забудьте о таблицах и путанице! Мы возьмём на себя расписание,
              напоминания и контроль оплат — всё в одном месте."
          />
          <Button
            as={Link}
            href={pages.auth.scenario}
            fullWidth
            className="h-auto s-text-[16] s-p-[12] s-leading-[24] s-rounded-[14]"
            variant="solid"
            color="primary"
          >
            Войти или создать аккаунт
          </Button>
        </div>
      </section>
    </WithWelcomePatternBackground>
  );
}
