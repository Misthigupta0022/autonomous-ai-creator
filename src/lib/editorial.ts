import { Topic } from "./topicDiscovery";

export interface EditorialResult {
  publish: boolean;
  reason: string;
}

const KEYWORDS = [
  "ai",
  "artificial intelligence",
  "llm",
  "agent",
  "openai",
  "google",
  "gemini",
  "anthropic",
  "claude",
  "robot",
  "robotics",
  "machine learning",
  "deep learning",
  "security",
  "cybersecurity",
];

export function evaluateTopic(topic: Topic): EditorialResult {
  const title = topic.title.toLowerCase();

  const matched = KEYWORDS.some((keyword) => title.includes(keyword));

  if (!matched) {
    return {
      publish: false,
      reason: "Rejected: Not relevant to the AI and technology persona.",
    };
  }

  if (title.length < 20) {
    return {
      publish: false,
      reason: "Rejected: Topic is too vague.",
    };
  }

  return {
    publish: true,
    reason: "Selected: Relevant to the persona and currently newsworthy.",
  };
}