import React, { FC } from "react";
import { useRecoilState } from "recoil";
// import { styled } from "../../utilities/style";
import {
  ActivityDetailsView,
  ActivityDetailsViewProps
} from "./activity-details-view";

import { selectedActivityState } from "../../state/activity";

/**
 * Look up the current activity by ID
 */
function getActivityDetails() {}

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
  const [selectedActivityId, setSelectedActivityId] = useRecoilState(
    selectedActivityState
  );

  console.log("selectedActivityId", selectedActivityId);

  let displayComponent = null;
  if (!detailsProps?.hidden) {
    displayComponent = <ActivityDetailsView {...detailsProps} />;
  }
  return displayComponent;
}
