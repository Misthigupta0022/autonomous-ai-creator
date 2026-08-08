import { randomUUID } from "crypto";
import { ai } from "@/lib/gemini";
import { getAgent, getPosts, savePost } from "@/lib/memory";
import { discoverTopics } from "./topicDiscovery";
import { evaluateTopic } from "./editorial";

export async function publishNextTopic() {
  const agent = getAgent();

  if (!agent) return;

  const topics = await discoverTopics();

  const oldPosts = getPosts();

  for (const topic of topics) {
   const ok = evaluateTopic(topic);

    if (!ok) continue;

    const prompt = `
You are ${agent.persona.name}, an expert in ${agent.persona.domain}.

Write ONE professional LinkedIn/X post.

Topic:
${topic.title}

Rules:
- 80–150 words
- Professional tone
- Mention one practical insight
- Mention why it matters today
- No hashtags
- No emojis
- Return only the post text.
`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "No content generated.";

    savePost({
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      text,
      rationale: `Selected because ${topic.title} is relevant to ${agent.persona.domain}.`,
     sources: [topic.source],
    });

    return;
  }
}