import React, { FC } from "react";
import { styled } from "../utilities/style";

import { TriangleIcon } from "../components/icons/triangle-icon";

export const ButtonWrapper = styled.div`
  cursor: pointer;
`;

export type ButtonBaseProps = {
  handleClick?(): any;
};

/**
 * Base button to wrap click-handling
 * around supplied child components.
 * @param props: FC & ButtonBaseProps
 */
export const ButtonBase: FC<ButtonBaseProps> = ({ children, handleClick }) => {
  return <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>;
};

export function TriangleButton({ handleClick }: ButtonBaseProps) {
  return (
    <ButtonBase handleClick={handleClick}>
      <TriangleIcon styleHeight={3} styleWidth={3} />
    </ButtonBase>
  );
}
