import React from "react";
import { SVGBase, SVGBaseProps } from "./svg-base";
import { getSVGViewBoxString } from "../../utilities/style";

export const TriangleIcon = ({
  fill = "white",
  height = 64,
  width = 64,
  stroke = "currentColor",
  x = 0,
  y = 0,
  styleWidth = 2,
  styleHeight = 2
}: SVGBaseProps) => (
  <SVGBase
    fill={fill}
    height={height}
    stroke={stroke}
    viewBox={getSVGViewBoxString(x, y, width, height)}
    width={width}
    styleWidth={styleWidth}
    styleHeight={styleHeight}
  >
    <path
      d="M1 1.82308L55 33L0.999997 64.1769L1 1.82308Z"
      fill={fill}
      stroke={stroke}
    />
  </SVGBase>
);
