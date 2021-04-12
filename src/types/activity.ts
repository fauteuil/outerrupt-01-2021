import { ReactNode } from "react";

export type ActivityType = "exercise" | "stretch" | "distraction";

export type Activity = {
  id: string;
  title: string;
  type: ActivityType;
  description: string;
  graphic?: ReactNode;
};
