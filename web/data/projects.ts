export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "llm-soup",
    title: "LLM海龟汤游戏",
    description: "基于大语言模型的逻辑推理游戏。在海龟汤（情境推理游戏）中，玩家需要通过询问只能回答「是」、「不是」的问题，来揭开一个离奇故事背后的真相。",
    link: "https://soup.elicit.info/",
    tags: ["LLM", "Game", "Logic Reasoning"]
  },
  {
    id: "chat-eval",
    title: "ChatEval",
    description: "上传聊天记录截图，利用大语言模型分析双方的对话参与度及互动质量，提供深度的对话洞察。",
    link: "https://chat.elicit.info",
    tags: ["LLM", "Analysis", "Social Interaction"]
  }
];
