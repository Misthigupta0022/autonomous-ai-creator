import fs from "fs";
import path from "path";
import { Agent, Post } from "@/types/agent";

const personaFile = path.join(process.cwd(), "src/data/persona.json");
const postsFile = path.join(process.cwd(), "src/data/posts.json");

export function saveAgent(agent: Agent) {
  fs.writeFileSync(personaFile, JSON.stringify(agent, null, 2));
}

export function getAgent(): Agent | null {
  if (!fs.existsSync(personaFile)) return null;

  const data = fs.readFileSync(personaFile, "utf8");

  if (!data.trim()) return null;

  return JSON.parse(data);
}

export function savePost(post: Post) {
  let posts: Post[] = [];

  if (fs.existsSync(postsFile)) {
    const data = fs.readFileSync(postsFile, "utf8");
    posts = data.trim() ? JSON.parse(data) : [];
  }

  posts.unshift(post);

  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

export function getPosts(): Post[] {
  if (!fs.existsSync(postsFile)) return [];

  const data = fs.readFileSync(postsFile, "utf8");

  if (!data.trim()) return [];

  return JSON.parse(data);
}