export interface Publication {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: number;
  tags?: string[];
  link?: string;
  highlight?: boolean;
  lab_students?: boolean; // 新增字段：方便您在前端做样式区分（例如学生名字加粗）
}

export const PUBLICATIONS: Publication[] = [
  // --- 2025 (Lab Era) ---
  {
    id: "ec-2025-forecast",
    title: "Algorithmic Robust Forecast Aggregation",
    authors: "Y. Guo, J. D. Hartline, Z. Huang, Y. Kong, A. Shah, F.-Y. Yu", // Guo, Huang
    conference: "EC",
    year: 2025,
    tags: ["Robust Aggregation", "Forecasting"],
    lab_students: true
  },
  {
    id: "iclr-2025-benchmarking",
    title: "Benchmarking LLMs' Judgments with No Gold Standard",
    authors: "S. Xu, Y. Lu, G. Schoenebeck, Y. Kong", // Lu
    conference: "ICLR",
    year: 2025,
    tags: ["LLM", "Benchmarking"],
    highlight: true,
    lab_students: true
  },
  {
    id: "www-2025-participation-bias",
    title: "Mitigating the Participation Bias by Balancing Extreme Ratings",
    authors: "Y. Guo, Y. Kong, J. Liu", // Guo
    conference: "WWW",
    year: 2025,
    tags: ["Bias Mitigation", "Oral Presentation"],
    highlight: true,
    lab_students: true
  },
  {
    id: "www-2025-adversarial",
    title: "Robust Aggregation with Adversarial Experts",
    authors: "Y. Guo, Y. Kong", // Guo
    conference: "WWW",
    year: 2025,
    tags: ["Robust Aggregation", "Adversarial"],
    lab_students: true
  },
  {
    id: "www-2025-auctions",
    title: "Learning against Non-credible Second-Price Auctions",
    authors: "Q. Wang, X. Xia, Z. Yang, X. Deng, Y. Kong, Z. Zhang, L. Wang, C. Yu, J. Xu, B. Zheng", // Q. Wang (Alumni), X. Xia
    conference: "WWW",
    year: 2025,
    tags: ["Auctions", "Mechanism Design"],
    lab_students: true
  },

  // --- 2024 ---
  {
    id: "wine-2024-best-paper",
    title: "Aggregation of Antagonistic Contingent Preferences: When Is It Possible?",
    authors: "X. Deng, B. Tao, Y. Wang", // Y. Wang
    conference: "WINE",
    year: 2024,
    tags: ["Mechanism Design", "Best Paper Award"],
    link: "https://arxiv.org/abs/2410.08127",
    highlight: true,
    lab_students: true
  },
  {
    id: "jacm-2024-peer",
    title: "Dominantly Truthful Peer Prediction Mechanisms with a Finite Number of Tasks",
    authors: "Y. Kong", // PI Solo
    conference: "J. ACM",
    year: 2024,
    tags: ["Peer Prediction", "Mechanism Design"],
    link: "https://doi.org/10.1145/3638239",
    highlight: true,
    lab_students: false // Important PI Work
  },
  {
    id: "ec-2024-baserate",
    title: "The Surprising Benefits of Base Rate Neglect in Robust Aggregation",
    authors: "Y. Kong, S. Wang, Y. Wang", // Y. Wang
    conference: "EC",
    year: 2024,
    tags: ["Robust Aggregation", "Behavioral Econ"],
    lab_students: true
  },
  {
    id: "ec-2024-text-eval",
    title: "Eliciting Informative Text Evaluations with Large Language Models",
    authors: "Y. Lu, S. Xu, Y. Zhang, Y. Kong, G. Schoenebeck", // Y. Lu
    conference: "EC",
    year: 2024,
    tags: ["Information Elicitation", "LLM"],
    lab_students: true
  },
  {
    id: "www-2024-second-order",
    title: "Robust Decision Aggregation with Second-order Information",
    authors: "Y. Pan, Z. Chen, Y. Kong†", // No Lab Students?
    conference: "WWW",
    year: 2024,
    tags: ["Robust Aggregation"],
    lab_students: false // External Collaboration
  },

  // --- 2023 ---
  {
    id: "itcs-2023-false-consensus",
    title: "False Consensus, Information Theory, and Prediction Markets",
    authors: "Y. Kong, G. Schoenebeck", // PI + External
    conference: "ITCS",
    year: 2023,
    tags: ["Prediction Markets", "Information Theory"],
    link: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ITCS.2023.81",
    lab_students: false // Important PI Work
  },
  {
    id: "neurips-2023-cheap-signals",
    title: "Calibrating 'Cheap Signals' in Peer Review without a Prior",
    authors: "Y. Lu, Y. Kong", // Y. Lu
    conference: "NeurIPS",
    year: 2023,
    tags: ["Peer Review", "Calibration"],
    lab_students: true
  },
  {
    id: "www-2023-experimental-design",
    title: "Near-optimal experimental design under the budget constraint in online platforms",
    authors: "Y. Guo, Y. Yuan, J. Zhang, Y. Kong, Z. Zhu, & Z. Cai", // Y. Guo
    conference: "WWW",
    year: 2023,
    tags: ["Experimental Design", "Online Platforms"],
    lab_students: true
  },
  {
    id: "icml-2023-bidding",
    title: "Learning to bid in repeated first-price auctions with budgets",
    authors: "Q. Wang, Z. Yang, X. Deng, Y. Kong", // Q. Wang
    conference: "ICML",
    year: 2023,
    tags: ["Auctions", "Learning"],
    lab_students: true
  },

  // --- 2022 ---
  {
    id: "neurips-2022-hierarchy",
    title: "Eliciting Thinking Hierarchy without a Prior",
    authors: "Y. Kong, Y. Li, Y. Zhang, Z. Huang, J. Wu", // Z. Huang
    conference: "NeurIPS",
    year: 2022,
    tags: ["Information Elicitation"],
    link: "https://arxiv.org/abs/2109.10619",
    highlight: true,
    lab_students: true
  },
  {
    id: "www-2022-bonus",
    title: "BONUS! Maximizing Surprise",
    authors: "Z. Huang, Y. Kong, X. Liu, G. Schoenebeck, S. Xu", // Z. Huang
    conference: "WWW",
    year: 2022,
    tags: ["Information Theory", "Surprise"],
    link: "https://arxiv.org/abs/2107.08207",
    lab_students: true
  },
  {
    id: "itcs-2022-multitask",
    title: "More Dominantly Truthful Multi-task Peer Prediction with a Finite Number of Tasks",
    authors: "Y. Kong", // PI Solo
    conference: "ITCS",
    year: 2022,
    tags: ["Peer Prediction"],
    link: "https://arxiv.org/abs/2103.02214",
    lab_students: false
  },

  // --- 2021 (Start of current PhD cohort) ---
  {
    id: "ijcai-2021-surprise",
    title: "SURPRISE! and When to Schedule It.",
    authors: "Z. Huang*, S. Xu*, Y. Shan, Y. Lu, Y. Kong, X. Liu, G. Schoenebeck", // Z. Huang, Y. Lu
    conference: "IJCAI",
    year: 2021,
    tags: ["Information Theory", "Scheduling"],
    link: "https://arxiv.org/abs/2106.02851",
    lab_students: true
  },

  // --- 2020 (Foundational / Prior Works) ---
  {
    id: "soda-2020-peer",
    title: "Dominantly Truthful Multi-task Peer Prediction with a Constant Number of Tasks",
    authors: "Y. Kong",
    conference: "SODA",
    year: 2020,
    tags: ["Peer Prediction"],
    link: "https://arxiv.org/abs/1911.00272",
    highlight: true, // Key Foundation
    lab_students: false
  },
  {
    id: "eccv-2020-tcgm",
    title: "TCGM: An Information-Theoretic Framework for Semi-Supervised Multi-Modality Learning",
    authors: "X. Sun*, Y. Xu*, P. Cao, Y. Kong, L. Hu, S. Zhang, Y. Wang",
    conference: "ECCV",
    year: 2020,
    tags: ["Computer Vision", "Information Theory", "Oral Presentation"],
    highlight: true,
    lab_students: false
  },
  {
    id: "aaai-2020-elicitation",
    title: "Information Elicitation Mechanisms for Statistical Estimation",
    authors: "Y. Kong, G. Schoenebeck, B. Tao, F. Yu",
    conference: "AAAI",
    year: 2020,
    tags: ["Information Elicitation", "Mechanism Design"],
    lab_students: false
  },

  // --- 2019 (Prior Works) ---
  {
    id: "wine-2019-outsourcing",
    title: "Outsourcing Computation: the Minimal Refereed Mechanism",
    authors: "Y. Kong, C. Peikert, G. Schoenebeck, B. Tao",
    conference: "WINE",
    year: 2019,
    tags: ["Mechanism Design"],
    link: "https://arxiv.org/abs/1910.14269v1",
    lab_students: false
  },
  {
    id: "neurips-2019-ldmi",
    title: "LDMI: A Novel Information-theoretic Loss Function for Training Deep Nets Robust to Label Noise",
    authors: "Y. Xu*, P. Cao*, Y. Kong, Y. Wang",
    conference: "NeurIPS",
    year: 2019,
    tags: ["Deep Learning", "Information Theory"],
    link: "https://arxiv.org/abs/1909.03388",
    lab_students: false
  },
  {
    id: "iclr-2019-maxmig",
    title: "Max-MIG: an Information-Theoretic Approach for Joint Learning from Crowds",
    authors: "P. Cao*, Y. Xu*, Y. Kong, Y. Wang",
    conference: "ICLR",
    year: 2019,
    tags: ["Crowdsourcing", "Information Theory"],
    link: "https://openreview.net/forum?id=BJg9DoR9t7",
    lab_students: false
  },
  // Q. Wang (Alumni) Paper? Checking author list of AAAI 2019 similarity...
  // B. Zhang, Y. Kong... (No Q. Wang) -> False
  {
    id: "aaai-2019-similarity",
    title: "f-Similarity Preservation Loss for Soft Labels: A Demonstration on Cross-Corpus Speech Emotion Recognition",
    authors: "B. Zhang*, Y. Kong*, G. Essl, E. M. Provost",
    conference: "AAAI",
    year: 2019,
    tags: ["Speech Recognition", "Machine Learning"],
    link: "https://aaai.org/ojs/index.php/AAAI/article/view/4518",
    lab_students: false
  },
  {
    id: "teac-2019-framework",
    title: "An Information-Theoretic Framework For Designing Information Elicitation Mechanisms That Reward Truth-telling",
    authors: "Y. Kong, G. Schoenebeck",
    conference: "TEAC",
    year: 2019,
    tags: ["Information Elicitation", "Journal"],
    link: "https://dl.acm.org/citation.cfm?doid=3309879.3296670",
    lab_students: false
  },

  // --- 2018 (Prior Works) ---
  {
    id: "ec-2018-expertise",
    title: "Eliciting Expertise without Verification",
    authors: "Y. Kong, G. Schoenebeck",
    conference: "EC",
    year: 2018,
    tags: ["Information Elicitation"],
    link: "https://arxiv.org/abs/1802.08312",
    lab_students: false
  },
  {
    id: "ec-2018-water",
    title: "Water from Two Rocks: Maximizing the Mutual Information",
    authors: "Y. Kong, G. Schoenebeck",
    conference: "EC",
    year: 2018,
    tags: ["Information Theory"],
    link: "https://arxiv.org/abs/1802.08887",
    highlight: true, // Seminal Work
    lab_students: false
  },
  {
    id: "itcs-2018-equilibrium",
    title: "Equilibrium Selection in Information Elicitation without Verification via Information Monotonicity",
    authors: "Y. Kong, G. Schoenebeck",
    conference: "ITCS",
    year: 2018,
    tags: ["Information Elicitation"],
    link: "https://arxiv.org/abs/1603.07751",
    lab_students: false
  },
  {
    id: "itcs-2018-bayesian",
    title: "Optimizing Bayesian Information Revelation Strategy in Prediction Markets: the Alice Bob Alice Case",
    authors: "Y. Kong, G. Schoenebeck",
    conference: "ITCS",
    year: 2018,
    tags: ["Prediction Markets"],
    link: "http://drops.dagstuhl.de/opus/volltexte/2018/8319/pdf/LIPIcs-ITCS-2018-14.pdf",
    lab_students: false
  },

  // --- 2016 ---
  {
    id: "wine-2016-microscope",
    title: "Putting Peer Prediction Under the Micro(economic)scope and Making Truth-telling Focal",
    authors: "Y. Kong, K. Ligett, G. Schoenebeck",
    conference: "WINE",
    year: 2016,
    tags: ["Peer Prediction"],
    link: "https://arxiv.org/abs/1603.07319",
    highlight: true, // Seminal Work
    lab_students: false
  }
];