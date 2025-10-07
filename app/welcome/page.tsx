import { DialogContent, WithWelcomePatternBackground } from '@/components';
import Image from 'next/image';
import React from 'react';
import phoneImage from '@/public/png/welcomePhone.png';
import welcomePanda from '@/public/png/welcomePanda.png';
import { Button } from '@heroui/button';
import Link from 'next/link';
import { pages } from '@/config/paths';
import { vh, vw } from '@/styles/utils';

export default async function Signin() {
  return (
    <WithWelcomePatternBackground>
      {/* Первая секция (фон и телефон) */}
      <section
        className="relative grid grid-cols-1 overflow-x-clip h-full justify-between"
        style={{ paddingTop: vh(24) }}
      >
        <div
          className="relative flex-1 pointer-events-none select-none m-auto"
          style={{ width: vh(220), height: vh(429) }}
        >
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
          <div
            className="absolute pointer-events-none select-none"
            style={{ left: vh(128), top: vh(149) }}
          >
            <div className="relative" style={{ width: vh(202), height: vh(328) }}>
              <Image src={welcomePanda} alt="Панда" fill priority placeholder="empty" />
            </div>
          </div>
        </div>

        {/* Контентная часть */}
        <div
          style={{
            borderRadius: vh(36),
            marginBottom: vh(27),
            paddingRight: vh(16),
            paddingLeft: vh(16),
            boxShadow: '0 -4px 12px rgba(0,0,0,0.1)', // смещение вверх
          }}
          className="flex flex-col items-center bg-white mx-auto w-full shadow-md self-end rounded-b-none"
        >
          <DialogContent
            title="Добро пожаловать в «пока нет названия»!"
            description="Забудьте о таблицах и путанице! Мы возьмём на себя расписание,
              напоминания и контроль оплат — всё в одном месте."
          />
          <Button
            as={Link}
            href={pages.auth.scenario}
            style={{
              fontSize: vh(16),
              padding: vh(12),
              lineHeight: vh(24),
              borderRadius: vh(14),
            }}
            fullWidth
            className="!h-auto"
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
