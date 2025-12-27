export interface Publication {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: number;
  tags?: string[];
  link?: string;
  highlight?: boolean;
}

export const PUBLICATIONS: Publication[] = [
  // 2025
  {
    id: "ec-2025-robust",
    title: "Algorithmic Robust Forecast Aggregation",
    authors: "EconCS Lab et al.",
    conference: "EC 2025",
    year: 2025,
    tags: ["Robust Aggregation", "Forecasting"],
    highlight: true
  },
  {
    id: "iclr-2025-llm",
    title: "Benchmarking LLMs' Judgments with No Gold Standard",
    authors: "EconCS Lab et al.",
    conference: "ICLR 2025",
    year: 2025,
    tags: ["LLM", "Benchmarking"],
    highlight: true
  },
  {
    id: "www-2025-robust",
    title: "Robust Aggregation against Adversarial Experts & Mitigating Participation Bias",
    authors: "EconCS Lab et al.",
    conference: "WWW 2025",
    year: 2025,
    tags: ["Robust Aggregation"]
  },
  // 2024
  {
    id: "jacm-2024-peer",
    title: "Dominantly Truthful Peer Prediction Mechanisms with a Finite Number of Tasks",
    authors: "Yuqing Kong et al.",
    conference: "J. ACM (Journal of the ACM)",
    year: 2024,
    tags: ["Peer Prediction", "Mechanism Design"],
    highlight: true
  },
  {
    id: "ec-2024-baserate",
    title: "Benefits of Base Rate Neglect in Robust Aggregation",
    authors: "EconCS Lab et al.",
    conference: "EC 2024",
    year: 2024,
    tags: ["Robust Aggregation"]
  },
  {
    id: "ec-2024-text",
    title: "Eliciting Informative Textual Evaluations with LLMs",
    authors: "EconCS Lab et al.",
    conference: "EC 2024",
    year: 2024,
    tags: ["Information Elicitation", "LLM"]
  },
  // 2022-2023
  {
    id: "neurips-2023-thinking",
    title: "Eliciting Thinking Hierarchy without Priors",
    authors: "EconCS Lab et al.",
    conference: "NeurIPS 2023",
    year: 2023,
    tags: ["Information Elicitation"]
  },
  {
    id: "neurips-2022-peer-review",
    title: "Signal Calibration in Peer Review",
    authors: "EconCS Lab et al.",
    conference: "NeurIPS 2022",
    year: 2022,
    tags: ["Peer Review"]
  },
  {
    id: "itcs-2023-consensus",
    title: "False Consensus Effect, Information Theory, and Prediction Markets",
    authors: "EconCS Lab et al.",
    conference: "ITCS 2023",
    year: 2023,
    tags: ["Prediction Markets"]
  }
];
