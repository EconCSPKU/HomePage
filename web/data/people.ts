export interface Person {
  name: string;
  role: string;
  year?: string; // For students, e.g., "2021 PhD"
  image: string;
  website?: string;
  description?: string;
  interests?: string[];
  alumni?: boolean;
}

export const PI: Person = {
  name: "Yuqing Kong (孔雨晴)",
  role: "Principal Investigator",
  image: "https://cfcs.pku.edu.cn/images/content/2020-10/20201021120650962702.png",
  website: "https://cfcs.pku.edu.cn/yuqkong/",
  description: "Tenured Associate Professor at CFCS, Peking University. Ph.D. from University of Michigan. Research focuses on the intersection of TCS and Economics (EconCS).",
  interests: ["Information Elicitation", "Prediction Markets", "Mechanism Design"]
};

export const PHD_STUDENTS: Person[] = [
  {
    name: "Qian Wang (王骞)",
    role: "PhD Student (Alumni)",
    year: "2019",
    image: "https://cfcs.pku.edu.cn/images/content/2024-09/20240927105940275385.jpg",
    website: "https://scholar.google.com/citations?user=sM9xjLsAAAAJ&hl=en",
    description: "Now Alumni. Published in WWW, ICML, AAAI.",
    interests: ["Mechanism Design", "Information Theory", "Network Science"],
    alumni: true
  },
  {
    name: "Zhihuan Huang (黄致焕)",
    role: "PhD Student",
    year: "2021",
    image: "https://nbdhhzh.github.io/1.jpg",
    website: "https://nbdhhzh.github.io/",
    interests: ["Information Aggregation", "Mechanism Design", "LLMs"]
  },
  {
    name: "Yongkang Guo (郭永康)",
    role: "PhD Student",
    year: "2021",
    image: "https://cfcs.pku.edu.cn/images/content/2021-09/20210906180845600988.jpg",
    interests: ["Algorithmic Game Theory", "Mechanism Design"]
  },
  {
    name: "Yuxuan Lu (陆宇暄)",
    role: "PhD Student",
    year: "2022",
    image: "https://cfcs.pku.edu.cn/images/content/2022-09/20220908103912629919.png",
    website: "https://luy.me/",
    interests: ["Information Elicitation", "Blockchain", "Computational Economics"]
  },
  {
    name: "Ying Wang (王颖)",
    role: "PhD Student",
    year: "2023",
    image: "https://cfcs.pku.edu.cn/images/content/2023-09/20230921143230646083.png",
    interests: ["Algorithmic Game Theory", "Information Aggregation"]
  },
  {
    name: "Mingyu Song (宋铭宇)",
    role: "PhD Student",
    year: "2024",
    image: "https://cfcs.pku.edu.cn/images/content/2024-09/20240927131745816897.jpg",
    interests: ["Computational Economics", "LLMs"]
  },
  {
    name: "Weinan Qian (钱炜楠)",
    role: "PhD Student",
    year: "2025",
    image: "https://tongclass.ac.cn/author/weinan-qian/avatar_hub4d06b279e01609e1abc7ebb610e5a06_2468813_270x270_fill_q100_lanczos_center.jpg",
    website: "https://tongclass.ac.cn/author/weinan-qian/",
    interests: ["Computational Economics"]
  },
  {
    name: "Yichong Xia (夏一翀)",
    role: "PhD Student",
    year: "2025",
    image: "https://cfcs.pku.edu.cn/images/content/2025-09/20250915155240024557.gif",
    interests: ["Computational Economics"]
  }
];
