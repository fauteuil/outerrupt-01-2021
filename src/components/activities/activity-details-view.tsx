import React, { FC, ReactNode } from "react";
import { styled } from "../../utilities/style";

const ActivityDetailsWrapper = styled.div`
  border: solid black 0.0625rem;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  background-color: black;
  padding: 0.5rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Description = styled.div`
  color: black;
  background-color: white;
  padding: 0.5rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const GraphicWrapper = styled.div`
  color: black;
  background-color: white;
  /* border: dotted gray 0.0625rem; */
  padding: 0.5rem;
  height: 12rem;
  width: 12rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

export interface ActivityDetailsViewProps {
  id: string;
  title: string;
  description: string;
  graphic?: ReactNode;
}

export function ActivityDetailsView({
  id,
  title,
  description,
  graphic
}: ActivityDetailsViewProps) {
  return (
    <ActivityDetailsWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <GraphicWrapper>(IMAGE HERE)</GraphicWrapper>
    </ActivityDetailsWrapper>
  );
}
