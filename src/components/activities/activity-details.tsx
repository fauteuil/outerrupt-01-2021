import React, { FC } from "react";
// import { styled } from "../../utilities/style";
import {
  ActivityDetailsView,
  ActivityDetailsViewProps
} from "./activity-details-view";

// dummy data, pull from state.
const detailsProps: ActivityDetailsViewProps = {
  id: "kjnknb",
  title: "Jumping Jacks",
  description: "jump up, jump down, jump all around",
  type: "exercise",
  hidden: false // true
};

export interface ActivityDetailsProps {
  hidden: boolean;
}
//export function ActivityDetails(props: ActivityDetailsProps) {
export function ActivityDetails() {
  return !detailsProps?.hidden && <ActivityDetailsView {...detailsProps} />;
}
