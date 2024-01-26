import { Milestone } from "lucide-react";

type MilestoneEvent = {
  event: string;
};

type MilestoneEvents = {
  month: string;
  details: MilestoneEvent[];
};

type MilestoneData = {
  year: number;
  events: MilestoneEvents[];
};

type Milestone = {
  data: MilestoneData[];
};

export type { Milestone };
