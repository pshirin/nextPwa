import { BgWelcomeSvgPattern } from "@/assets/svg/BgWelcomeSvgPattern";
import { SvgPatternRepeater } from "@/components";

export default async function Signin() {
  return (
    <section className="relative h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-custom-blue-100 to-white pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <SvgPatternRepeater maskImage="linear-gradient(to bottom, transparent 0%, black 50%, black 100%)">
          <BgWelcomeSvgPattern />
        </SvgPatternRepeater>
      </div>

      <div className="relative z-10 flex gap-3 text-black">welcomes</div>
      <div className="pattern-bg absolute inset-0" />
    </section>
  );
}
