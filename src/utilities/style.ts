import { SVGViewBox } from "../types/svg";

/**
 * Assume 16px base font size: (0.0625 rems per px)
 * @param px
 */
export function getRemsFromPx(px: number): number {
  return 0.0625 * px;
}

/**
 * Assume 16px base font size: (0.0625 rems per px)
 * @param rems
 */
export function getPxFromRems(rems: number): number {
  return rems / 0.0625;
}

export function getSVGViewBoxString(
  x: number,
  y: number,
  width: number, // px
  height: number // px
) {
  return `${x} ${y} ${width} ${height}`;
}
