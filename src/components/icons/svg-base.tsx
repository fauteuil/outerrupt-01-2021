import styled from "styled-components";
/**
 * <svg/> and <path/> dimensions are set by the standard passed `x`, `y`, `width` and `height` attributes.
 * Final rendered dimensions are set by `styleWidth` and `styleHeight`.
 */
export interface SVGBaseProps {
  fill?: string;
  height?: number;
  stroke?: string;
  title?: string;
  viewBox?: string;
  width?: number;
  x?: number;
  y?: number;
  styleWidth?: number;
  styleHeight?: number;
}

export const SVGBase = styled("svg").attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
})<SVGBaseProps>`
  height: ${(props) => (props.styleHeight ? props.styleHeight : 2)}rem;
  width: ${(props) => (props.styleWidth ? props.styleWidth : 2)}rem;
`;
