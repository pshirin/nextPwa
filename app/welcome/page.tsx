import { DialogContent, WithWelcomePatternBackground } from "@/components";
import Image from "next/image";
import React from "react";
import phoneImage from "@/public/png/welcomePhone.png";
import welcomePanda from "@/public/png/welcomePanda.png";
import { Button } from "@heroui/button";
import Link from "next/link";
import { pages } from "@/config/paths";

export default async function Signin() {
  return (
    <WithWelcomePatternBackground>
      <section className="relative h-full w-screen flex flex-col items-center overflow-x-clip justify-between pt-6">
        <div className="relative w-[220px] h-[429px] flex-1 pointer-events-none select-none">
          <Image
            src={phoneImage}
            alt=" "
            style={{
              clipPath: "inset(9px 9px 6px 9px round 35px)",
              objectFit: "contain",
            }}
            priority
            placeholder="blur"
          />
          <div className="absolute left-32 top-36 pointer-events-none select-none">
            <div className="relative w-[202px] h-[328px]">
              <Image
                src={welcomePanda}
                alt=" "
                priority
                height={328}
                width={202}
                style={{
                  objectFit: "contain",
                }}
                placeholder="empty"
              />
            </div>
          </div>
        </div>

        <div className="pt-9 px-4 pb-7 flex flex-col items-center gap-9 rounded-2xl bg-white mb-0">
          <DialogContent
            description="Забудьте о таблицах и путанице! Мы возьмём на себя расписание,
              напоминания и контроль оплат — всё в одном месте"
            title="Добро пожаловать в «пока нет названия»!"
          />

          <Button
            as={Link}
            href={pages.auth.scenario}
            className="text-base"
            radius="lg"
            size="lg"
            fullWidth
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
