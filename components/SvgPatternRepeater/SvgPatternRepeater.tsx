import { FC } from "react";

interface SvgPatternRepeaterProps {
  cellWidth?: number;
  cellHeight?: number;
  children: React.ReactNode;
  className?: string;
  maskImage?: string;
}

export const SvgPatternRepeater: FC<SvgPatternRepeaterProps> = ({
  cellHeight = 49,
  cellWidth = 86,
  children,
  className,
  maskImage,
}) => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    style={{
      maskImage,
      WebkitMaskImage: maskImage,
    }}
  >
    <defs>
      <pattern
        id="pattern"
        x="0"
        y="0"
        width={cellWidth}
        height={cellHeight}
        patternUnits="userSpaceOnUse"
      >
        {children}
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#pattern)" />
  </svg>
);
