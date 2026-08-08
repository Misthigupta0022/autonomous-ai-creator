import { Agent, Post } from "@/types/agent";

let agent: Agent | null = null;
let posts: Post[] = [];

// Save Agent
export function saveAgent(newAgent: Agent) {
  agent = newAgent;
  console.log("Saved Agent:", agent);
}

// Get Agent
export function getAgent(): Agent | null {
  return agent;
}

// Save Post
export function savePost(post: Post) {
  posts.unshift(post);
}

// Get Posts
export function getPosts(): Post[] {
  return posts;
}