import React, { FC } from "react";
import { styled } from "../../utilities/style";
import {
  ActivityDetailsView,
  ActivityDetailsViewProps
} from "./activity-details-view";

export interface ActivityDetailsProps {}
export function ActivityDetails(props: ActivityDetailsProps) {
  const detailsProps: ActivityDetailsViewProps = {
    id: "kjnknb",
    title: "Jumoing Jacks",
    description: "jump up, jump down, jump all around"
  };
  return <ActivityDetailsView {...detailsProps} />;
}
