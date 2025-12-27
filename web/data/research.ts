import { LucideIcon, Brain, TrendingUp, ShieldCheck, Users } from "lucide-react";

export interface ResearchArea {
  title: string;
  description: string;
  iconName: "Brain" | "TrendingUp" | "ShieldCheck" | "Users"; // Mapping key for icons
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    title: "Information Elicitation",
    description: "In the absence of ground truth, how can we incentivize participants to provide truthful information (Peer Prediction)? How do we evaluate the quality of information and predictions?",
    iconName: "Brain"
  },
  {
    title: "Prediction Markets",
    description: "Designing market mechanisms to aggregate dispersed information for accurate forecasting of future events.",
    iconName: "TrendingUp"
  },
  {
    title: "Mechanism Design",
    description: "Designing incentive-compatible mechanisms where maximizing individual interest aligns with system goals.",
    iconName: "ShieldCheck"
  },
  {
    title: "Applications to Crowdsourcing & ML",
    description: "Robust aggregation against adversarial experts, benchmarking LLMs' judgments with information-theoretic methods, and exploring AI-Human collaboration.",
    iconName: "Users"
  }
];
