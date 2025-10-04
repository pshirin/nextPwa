import React from "react";
import { SvgPatternRepeater } from "@/components/SvgPatternRepeater";
import { BgWelcomeSvgPattern } from "@/assets/icons/svg/BgWelcomeSvgPattern";

interface WithPatternBackgroundProps {
  readonly children: React.ReactNode;
}

export const WithWelcomePatternBackground = ({
  children,
}: WithPatternBackgroundProps) => (
  <React.Fragment key="background">
    <div className="relative z-1 inset-0 w-screen h-screen">{children}</div>
    <div className="absolute inset-0 bg-gradient-to-b from-custom-blue-100 to-white pointer-events-none" />
    <div className="absolute inset-0 pointer-events-none">
      <SvgPatternRepeater maskImage="linear-gradient(to bottom, transparent 0%, black 50%, black 100%)">
        <BgWelcomeSvgPattern />
      </SvgPatternRepeater>
    </div>
  </React.Fragment>
);
